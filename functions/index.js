const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


exports.twilio = functions.https.onRequest((request, response) => {

    const { From, Body } = request.query;

    if(/^#[0-9A-F]{6}$/i.test(Body)) {

        let anonymFrom = From.substr(0, 3) + "*******" + From.slice(-2);

        admin.database().ref('bg-color').set(Body);
        admin.database().ref('last-change').set({
            date: Date.now(),
            from: anonymFrom

        });

        admin.database().ref('bg-changes/').push().set({
            color: Body,
            from: From,
            date: Date.now()
        });

        // Tell Twilio everything is ok
        response.append('Content-Type', 'text/xml');
        response.send('<?xml version="1.0" encoding="UTF-8"?><Response></Response>');
    } else {

        // Send message to user, that the given color is invalid
        response.append('Content-Type', 'text/xml');
        response.send('<?xml version="1.0" encoding="UTF-8"?><Response><Message>That is not a valid color :(</Message></Response>');
    }
});

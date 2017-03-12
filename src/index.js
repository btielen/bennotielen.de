import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import NoMatch from './NoMatch';
import Resume from './Resume';
import Contact from './Contact';
import Header from './components/Header'
import ChangeBg from './ChangeBg'
import Color from './containers/Color'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import './index.css';
import configureStore from './store'
import firebase from  './utility/Firebase'



const initialState = window.__INITIAL_STATE__ || {firebase: { authError: null }}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
        <Router>
              <div className="container">

                  <Color>
                    <Header/>
                  </Color>
                  <div className="pane">
                      <Switch>
                          <Route exact path="/" component={Home}/>
                          <Route path="/resume" component={Resume} />
                          <Route path="/contact" component={Contact} />
                          <Route path="/background" component={ChangeBg} />
                          <Route component={NoMatch}/>
                      </Switch>
                  </div>

                  <div className="footer"><mark><Link to="/background">Hintergrundfarbe ändern?</Link></mark></div>
              </div>

        </Router>
  </Provider>
  ,
  document.getElementById('root')
);

firebase.database().ref('bg-color').on('value', function(snapshot) {
    document.body.style.backgroundColor = snapshot.val();
});

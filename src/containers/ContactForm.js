import React from 'react'

let ContactForm = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Ihre E-mail"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Nachricht</label>
                <textarea className="form-control" rows="6"></textarea>
            </div>
            <div className="form-group">
                <button className="btn btn-secondary">Senden</button>
            </div>
        </form>
    )
}

export default ContactForm
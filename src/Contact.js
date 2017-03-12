import React from 'react'
import { Link } from 'react-router-dom'

let Contact = () => {
    return (
        <div>
            <div className="row">


                <div className="col text-center">
                    <p>
                        <strong>Benno Tielen</strong> <br />
                        Benno@vakcloud.nl
                    </p>
                    <p>
                        +4915735728380
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="navi">
                    <Link to="/resume" className="float-left">&larr; Lebenslauf</Link>
                </div>
            </div>
        </div>
    )
}

export default Contact
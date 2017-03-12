import React from 'react'
import { Link } from 'react-router-dom'
import ResumeItem from './components/ResumeItem'
import ResumeTime from './components/ResumeTime'

let Resume = () => (
        <div>
            <h3>Lebenslauf</h3>

            <div className="resume">
            <ResumeItem year={1989}>Geboren in Bunnik, Holland</ResumeItem>
            <ResumeTime amount={10} />
            <ResumeItem year={2000}>Erste Seite entwickelt <em>http://benno2000.zonnet.nl</em></ResumeItem>
            <ResumeTime amount={7} />
            <ResumeItem year={2007}>Anfang Mathematik Studium an der Universität Utrecht</ResumeItem>
            <ResumeTime amount={2} />
            <ResumeItem year={2009}>Anfang Fotografie Studium Amsterdam</ResumeItem>
            <ResumeTime amount={3} />
            <ResumeItem year={2012}>Freelance Webdeveloper</ResumeItem>
            <ResumeTime amount={2} />
            <ResumeItem year={2014}>Umzug nach Berlin</ResumeItem>
            <ResumeTime amount={2} />
                <ResumeItem year={2016}>Gründung <a href="https://www.vakcloud.nl" target="_blank">Vakcloud B.V.</a></ResumeItem>
            </div>
            <div className="navi">
                <Link to="/" className="float-left">&larr; Home</Link>
                <Link to="/contact"  className="float-right">Kontakt &rarr;</Link>
            </div>

        </div>
)


export default Resume
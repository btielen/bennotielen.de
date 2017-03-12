import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css';

class Home extends Component {
  render() {

    return (
      <div>
            <ul>
              <li>PHP</li>
              <li>Symfony</li>
              <li>React</li>
              <li>Google Cloud</li>
              <li>Und mehr</li>
            </ul>

            <div className="navi">
              <Link to="/resume" className="float-right">Lebenslauf &rarr;</Link>
            </div>
      </div>
    );
  }
}

export default Home;

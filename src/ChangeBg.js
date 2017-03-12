import React, { Component } from 'react'
import { SketchPicker } from 'react-color'
import LastBackgroundUpdate from './containers/LastBackgroundUpdate'

class ChangeBg extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "#FEE3E7"
        }

        this.handleColorChange.bind(this)
    }

    handleColorChange = (color) => {
        this.setState({
            color: color.hex
        })
    }

    render() {
        return (
            <div>
                <h4>Ihr bestimmt die Hintergrundfarbe dieser Seite!</h4>

                <p className="lead mb-5">
                    Sende eine Farbe per SMS an +4915735992823 um die Hintergrundfarbe dieser Seite für
                    alle Nutzer real-time zu ändern.
                </p>

                <div className="row">
                    <div className="col align-content-center">
                        <SketchPicker color={this.state.color} onChangeComplete={this.handleColorChange} />
                    </div>

                    <div className="col">
                        <h5>Instruktionen</h5>

                        <ol>
                            <li>Wähle eine Farbe mit Hilfe der Colormixer</li>
                            <li>Sende <strong>{this.state.color}</strong> per SMS an +4915735992823</li>
                            <li>Die Seite wird nach einigen Sekunden geupdated</li>
                        </ol>


                        <LastBackgroundUpdate />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChangeBg
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
    firebaseConnect,
    dataToJS
} from 'react-redux-firebase'

class Color extends Component {

    static propTypes = {
        color: PropTypes.string,
        firebase: PropTypes.shape({
            push: PropTypes.func.isRequired
        })
    }

    blackOrWhite(color) {
        return (parseInt(color, 16) > 0xffffff/2) ? '#000000':'#ffffff';
    }

    render() {

            if(this.props.color)
                return (
                    <div className="animate-color" style={{ color: this.blackOrWhite(this.props.color.substr(1))}}>
                        {this.props.children}
                    </div>
                )
            else
                return (
                    <div>
                        {this.props.children}
                    </div>
                )
    }
}

const fbWrappedComponent = firebaseConnect([
        '/bg-color'
])(Color)

export default connect(
    ({firebase}) => ({
        color: dataToJS(firebase, 'bg-color')
    })
)(fbWrappedComponent)
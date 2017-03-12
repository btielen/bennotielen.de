import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
    firebaseConnect,
    isLoaded,
    dataToJS
} from 'react-redux-firebase'

class LastBackgroundUpdate extends Component {

    static propTypes = {
        firebase: PropTypes.shape({
            push: PropTypes.func.isRequired
        })
    }

    render() {

        const { change } = this.props
        if(isLoaded(change)) {
            let date = new Date(change.date)

            return (
                <div>Letztes Update von {change.from} um {date.toLocaleDateString()} {date.toLocaleTimeString()}</div>
            )
        } else {
            return (
                <div></div>
            )
        }


    }
}

const fbWrappedComponent = firebaseConnect([
    '/last-change'
])(LastBackgroundUpdate)

export default connect(
    ({firebase}) => ({
        change: dataToJS(firebase, 'last-change')
    })
)(fbWrappedComponent)
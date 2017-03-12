import React, { PropTypes } from 'react'

let ResumeTime = ({amount}) => (
        <div className="resume-time" style={{ height: `${amount*10}px`}}></div>
)

ResumeTime.propTypes = {
    amount: PropTypes.number.isRequired
}

export default ResumeTime
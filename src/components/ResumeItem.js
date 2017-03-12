import React, { PropTypes } from 'react'

let ResumeItem = ({year, children}) => {
    return (
        <div><span className="resume-item-year">{year}</span> {children}</div>
    )
}

ResumeItem.propTypes = {
    year: PropTypes.number.isRequired,
}

export default ResumeItem

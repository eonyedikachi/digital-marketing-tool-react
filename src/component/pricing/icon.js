import React from 'react'
// import './pricing.css'


 function Icon(props) {
    return (
        <React.Fragment>
            <p><i className="fas fa-check-circle"></i>{props.word}</p>
        </React.Fragment>
    )
}
export default Icon;
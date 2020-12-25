import React from 'react'

const Button = props => {
  const { type, className } = props;
    return (
      <button 
        type={type}
        className={className}
      >
        {/* <i className={props.icon}></i> 
        {label} */}
      </button>  
    )
}
export default Button;
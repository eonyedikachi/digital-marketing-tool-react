import React from 'react'

const Button = props => {
  const { type, className, content, ...rest } = props;
    return (
      <button 
        type={type}
        className={className}
        {...rest}
      >
      { content}
      </button>  
    )
}
export default Button;
import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

// const Input = styled.input`
//   border: none;
//   outline: none;
//   border-bottom: 2px solid #8c30f5;
//   transition: all 0.5s ease-in-out;
// `;
// const Form = styled.div`
//   width: 70%;
//   border-radius: 10px;
//   background: #ffffff;
// `;
// const Span = styled.span`
//   display: flex;
//   align-items: center;
// `;
function FormField({className, name, label, ...rest }) {
  return (
    
    <input className={className} id={name} name={name} {...rest} />

  );
}

export default FormField;

import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  border-bottom: 1px solid black;
  transition: all 0.5s ease-in-out;
  &:focus {
    border-bottom: 1px solid #8c30f5;
  }
`;
function FormField({className, name, label, ...rest }) {
  return (
    
    <Input className={className} id={name} name={name} {...rest} />

  );
}

export default FormField;

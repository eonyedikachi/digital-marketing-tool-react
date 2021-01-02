import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid #8c30f5;
  transition: all 0.5s ease-in-out;
`;
const Formm = styled.div`
  width: 70%;
  border-radius: 10px;
  background: #ffffff;
`;
function FormField({ name, label, ...rest }) {
  return (
    <Formm>
      <label htmlFor={name}>{label}</label> <br/>
      <Input id={name} name={name} {...rest} />
    </Formm>
  );
}

export default FormField;

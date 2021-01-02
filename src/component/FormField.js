import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { BsFillEyeFill, BsFillEyeSlashFill, } from "react-icons/bs";

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid #8c30f5;
  transition: all 0.5s ease-in-out;
`;
const Form = styled.div`
  width: 70%;
  border-radius: 10px;
  background: #ffffff;
`;
const Span = styled.span`
  display: flex;
  align-items: center;
`;
function FormField({ name, label, ...rest }) {
  return (
    <Form className="input-field my-4">
      <Span>
        <Input className="d-block w-100" id={name} name={name} {...rest} />
        <BsFillEyeFill
          style={{ marginLeft: "-30px", marginTop: "-5px", color: "black" }}
        />
      </Span>
    </Form>
  );
}

export default FormField;

import React, { Component } from 'react';
import styled from "styled-components";

const ThisButton = styled.button`
  background: #8c30f5;
  color: #fff;
  width: 70%;
  border: none;
  margin-top: 15px;
  padding: 6px 12px;
  align-self: center;
`;

function SubmitButton (props) {
    return( 
        
            <ThisButton {...props.buttonProperties} >
                {props.buttonName}
            </ThisButton>
    )
}



export default SubmitButton;

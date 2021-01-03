import React, { Component } from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter, } from "react-icons/io";
import styled from "styled-components";
const NuSoc = styled.div`
  text-decoration: none;
    background-color: #8c30f5;
    border-radius: 10%;
  padding: 1rem;
  display: flex;
  width: fit-content;
  justify-content: space evenly;
  align-items: center;
`;
var social = {
    background: "white",
  textDecoration: "none",
  height: "30px",
  width: "30px",
    borderRadius: "50%",
    fontSize: "24px",
  display: "flex",
  justifyContent: "center",
    alignItems: "center",
  margin: "0.5rem",
}
class Socials extends Component {
    render() {
        return (
          <div>
            <NuSoc className="d-flex align-items-center mt-4">
              Create account with:
              <div className="d-flex align-items-center">
                <FcGoogle style={social} />
              </div>
              <div className="d-flex align-items-center">
                <IoLogoLinkedin style={social} />
              </div>
              <div className="d-flex align-items-center">
                <IoLogoFacebook style={social} />
              </div>
              <div className="d-flex align-items-center">
                <IoLogoTwitter style={social} />
              </div>
            </NuSoc>
          </div>
        );
    }
}

export default Socials;

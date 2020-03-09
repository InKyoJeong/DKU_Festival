import React from "react";
import bg from "../assets/festa2.jpeg";
import styled from "styled-components";
import Clock from "./Clock";

function Cover() {
  return (
    <>
      <Background>
        <Clock />
      </Background>
    </>
  );
}

const Background = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 50%,
      rgba(255, 225, 255, 0.4)
    ),
    url(${bg});
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  @media screen and (max-width: 768px) {
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 225, 255, 0.4)
      ),
      url(${bg});
    width: 100%;
    height: 400px;
    position: absolute;
    bottom: 0px;
  }

  @media screen and (max-width: 480px) {
    background-image: url(${bg});
    /* background-position: center bottom; */
    width: 100%;
    height: 200px;
    /* 
    position: absolute;
    bottom: 0px; */
  }
`;

export default Cover;

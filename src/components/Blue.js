import React from "react";
import styled from "styled-components";
import LineUp from "./LineUp";
function Blue() {
  return <Container id="blue">{/* <LineUp /> */}</Container>;
}

const Container = styled.div`
  height: 100vh;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Blue;

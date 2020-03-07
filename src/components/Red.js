import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import LineUp from "./LineUp";
function Red() {
  return (
    <>
      <Container id="red">
        <Timer />
      </Container>

      <Container id="red2">
        <LineUp />
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Red;

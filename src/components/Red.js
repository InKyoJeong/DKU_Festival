import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
function Red() {
  return (
    <>
      <Container id="red">
        <Timer />
      </Container>

      <Container id="red2">
        <Timer />
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

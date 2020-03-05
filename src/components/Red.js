import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
function Red() {
  return (
    <Container id="red">
      <Timer />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Red;

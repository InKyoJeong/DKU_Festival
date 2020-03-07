import React from "react";
import styled from "styled-components";
import Cover from "./Cover";
import LineUp from "./LineUp";

function Home() {
  return (
    <>
      <Container1 id="main">
        <Cover />
      </Container1>

      <Container id="line">
        <LineUp />
      </Container>
    </>
  );
}

const Container1 = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 100vh;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Home;

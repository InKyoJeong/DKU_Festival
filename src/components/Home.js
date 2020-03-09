import React from "react";
import styled from "styled-components";
import Cover from "./Cover";
import LineUp from "./LineUp";
import Schedule from "./Schedule";
import Promo from "./Promo";

function Home() {
  return (
    <>
      <Container1 id="main">
        <Cover />
      </Container1>

      <Container id="line">
        <LineUp />
      </Container>

      <Container id="schedule">
        <Schedule />
      </Container>

      <Container id="promo">
        <Promo />
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
  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export default Home;

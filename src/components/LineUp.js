import React from "react";
import Detail from "./Detail";
import styled from "styled-components";

import TT from "../assets/tt.jpeg";
import GF from "../assets/gf.png";
import HA from "../assets/ha.jpg";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */

  &:not(:last-child) {
    padding-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
const LineUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 50px;
  margin-right: 3rem;
  padding: 10px 10px;
  font-weight: bold;
  @media screen and (max-width: 480px) {
    font-size: 30px;
    margin-right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    padding: 5px 0px;
  }
`;
const Title = styled.div`
  border-radius: 10px;
  display: flex;
  justify-content: center;
  font-size: 33px;
  font-weight: bold;
  margin: 20px 0px;

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    font-weight: bold;
    background-color: #4b3a58;
    color: white;
    width: 50%;
    padding: 5px 0px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 480px) {
  }
  /* &:not(:last-child) {
    margin-right: 10px;
  } */
`;

const LineUp = () => (
  <LineUpContainer>
    <Title>대동제 라인업</Title>
    <DetailContainer>
      <Day>5/10</Day>
      <Container>
        <Detail name="태연" image={TT} />
        <Detail name="아이유" image={TT} />
      </Container>
    </DetailContainer>
    <DetailContainer>
      <Day>5/11</Day>
      <Container>
        <Detail name="여자친구" image={GF} />
        <Detail name="현아" image={HA} />
      </Container>
    </DetailContainer>
    <DetailContainer>
      <Day>5/12</Day>
      <Container>
        <Detail name="셋째날가수" image={TT} />
        <Detail name="셋째날가수2" image={TT} />
        <Detail name="셋째날가수2" image={TT} />
      </Container>
    </DetailContainer>
  </LineUpContainer>
);

export default LineUp;

import React from "react";
import LineUpDetail from "./LineUpDetail";
import styled from "styled-components";

import TT from "../assets/images/tt.jpeg";
import GF from "../assets/images/gf.png";
import HA from "../assets/images/ha.jpg";
import IU from "../assets/images/iu.jpg";

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

const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 50px;
  margin-right: 3rem;
  padding: 10px 10px;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-right: 0;
    margin-bottom: 5px;
    padding: 5px 0px;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  font-weight: bold;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.59);
  color: white;

  background: -webkit-linear-gradient(
    90deg,
    #664ca1,
    #a381b9,
    #c3b8df
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    90deg,
    #664ca1,
    #a381b9,
    #c3b8df
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  padding: 0px 100px;
  height: 100%;
  @media screen and (max-width: 480px) {
    margin: 20px 0px;
    font-size: 23px;
    width: 50%;
    height: 50px;
    padding: 5px 0px;
    border-radius: 8px;
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
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* background-color: red; */
  @media screen and (max-width: 480px) {
    /* background-color: white; */
  }
`;
const LineUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 100px;
  @media screen and (max-width: 480px) {
    padding-left: 0px;
  }
`;
const AllContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    height: 90vh;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  /* justify-content: center; */
`;
const LineUp = () => (
  <AllContainer>
    <TitleContainer>
      <Title>대동제 라인업</Title>
    </TitleContainer>
    <LineUpContainer>
      <DetailContainer>
        <Day>5/10</Day>
        <Container>
          <LineUpDetail name="태연" image={TT} />
          <LineUpDetail name="아이유" image={IU} />
        </Container>
      </DetailContainer>
      <DetailContainer>
        <Day>5/11</Day>
        <Container>
          <LineUpDetail name="여자친구" image={GF} />
          <LineUpDetail name="현아" image={HA} />
        </Container>
      </DetailContainer>
      <DetailContainer>
        <Day>5/12</Day>
        <Container>
          <LineUpDetail name="셋째날가수" image={TT} />
          <LineUpDetail name="셋째날가수2" image={TT} />
          <LineUpDetail name="셋째날가수2" image={TT} />
        </Container>
        {/* <Container>
        <Detail name="셋째날가수2" image={TT} />
        <Detail name="셋째날가수2" image={TT} />
      </Container>  만약 4명이상이면 Container로 묶어서 내리기*/}
      </DetailContainer>
    </LineUpContainer>
  </AllContainer>
);

export default LineUp;

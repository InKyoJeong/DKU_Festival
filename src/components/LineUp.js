import React from "react";
import LineUpDetail from "./LineUpDetail";
import styled from "styled-components";

import MKH from "../assets/images/mkh.png";
import KJ from "../assets/images/kj.png";
import YH from "../assets/images/yh.png";
import DA from "../assets/images/da.png";
import BB from "../assets/images/bb.png";
import LP from "../assets/images/lp.png";
import LOVE from "../assets/images/love.png";

const LineUp = () => (
  <AllContainer>
    <TitleContainer>
      <Title>대동제 라인업</Title>
    </TitleContainer>

    <LineUpContainer>
      <DetailContainer>
        <Day>5/11</Day>
        <Container>
          <LineUpDetail name="권진아" image={KJ} />
          <LineUpDetail name="윤하" image={YH} />
        </Container>
      </DetailContainer>
      <DetailContainer>
        <Day>5/12</Day>
        <Container>
          <LineUpDetail name="민경훈" image={MKH} />
          <LineUpDetail name="다비치" image={DA} />
          <LineUpDetail name="러블리즈" image={LOVE} />
        </Container>
      </DetailContainer>
      <DetailContainer>
        <Day>5/13</Day>
        <Container>
          <LineUpDetail name="백예린" image={BB} />
          <LineUpDetail name="루피" image={LP} />
        </Container>
        {/* <Container>
          <Detail name="셋째날가수2" image={TT} />
          <Detail name="셋째날가수2" image={TT} />
        </Container>  만약 4명이상이면 Container로 묶어서 내리기*/}
      </DetailContainer>
    </LineUpContainer>
  </AllContainer>
);

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  &:not(:last-child) {
    padding-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 3rem;
  margin-right: 3rem;
  padding: 10px 10px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    margin: auto;
    padding: auto;
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
  background: -webkit-linear-gradient(90deg, #664ca1, #a381b9, #c3b8df);
  background: linear-gradient(90deg, #664ca1, #a381b9, #c3b8df);
  width: 300px;
  height: 100%;
  z-index: 1;
  @media screen and (max-width: 768px) {
    margin: 5% auto;
    font-size: 23px;
    width: 50%;
    height: 50px;
    padding: 5px 0px;
    border-radius: 8px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    /* padding-top: 10%; */
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
const LineUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: auto; */
  width: 100vw;
`;
const AllContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    /* height: 76%; */
    height: 85%;
  }
`;

export default LineUp;

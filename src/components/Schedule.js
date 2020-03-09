import React from "react";
import styled from "styled-components";
import { DAY1, DAY2, DAY3, MINI_GROUND } from "../data/ScheduleData";
import PropTypes from "prop-types";

const Schedule = ({ changeDay, prevButton, nextButton }) => (
  <AllContainer id="schedule">
    <TitleContainer>
      <Title>일정</Title>
    </TitleContainer>

    <ButtonContainer>
      <Button onClick={prevButton}></Button>
      <Button onClick={nextButton}></Button>
    </ButtonContainer>

    <DayContainer>
      <Day>5 / {changeDay + 11}</Day>
      <ContentContainer>
        <InfoContainer>
          <Info>
            <span role="img" aria-label="title">
              📌
            </span>{" "}
            대운동장 특설무대 운영시간표
          </Info>
        </InfoContainer>
        <Content>
          {changeDay === 0 ? (
            <>
              {DAY1.map(data => (
                <S key={data.id}>
                  <ST>{data.time}</ST>
                  <SC>{data.content}</SC>
                </S>
              ))}
            </>
          ) : changeDay === 1 ? (
            <>
              {DAY2.map(data => (
                <S key={data.id}>
                  <ST>{data.time}</ST>
                  <SC>{data.content}</SC>
                </S>
              ))}
            </>
          ) : (
            <>
              {DAY3.map(data => (
                <S key={data.id}>
                  <ST>{data.time}</ST>
                  <SC>{data.content}</SC>
                </S>
              ))}
            </>
          )}
        </Content>
      </ContentContainer>

      <ContentContainer>
        <InfoContainer>
          <Info>
            <span role="img" aria-label="title">
              📌
            </span>{" "}
            학생회관 소공연장
          </Info>
        </InfoContainer>
        <Content>
          {MINI_GROUND.map(data => (
            <S key={data.id}>
              <ST>{data.time}</ST>
              <SC2>{data.content}</SC2>
            </S>
          ))}
        </Content>
      </ContentContainer>

      <ContentContainer>
        <InfoContainer>
          <Info>
            <span role="img" aria-label="title">
              📌
            </span>{" "}
            기타 프로그램
          </Info>
        </InfoContainer>
        <Extra>
          <SE>바자회 : 대운동장 중앙부스 옆</SE>
          <SE>푸드트럭 : 학생회관 1층 입구 주변</SE>
          <SE>출발 드림팀 : 에어 바운스 설치(대운동장)</SE>
          <SE>오락기 및 인형뽑기 : (중앙부스)</SE>
        </Extra>
      </ContentContainer>
    </DayContainer>
  </AllContainer>
);
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    flex-direction: row;
  }
`;
const Button = styled.button`
  /* font-size: 40px; */
  background-color: red;
  width: 120px;
  height: 120px;
  /* border: none; */
  &:hover {
    background-color: black;
    transition: ease-in-out 0.2s;
  }
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const Extra = styled.div`
  flex-direction: column;
  display: flex;
  font-size: 30px;
  font-style: italic;
  padding: 10px 10px 0 10px;
  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
`;
const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid #c3b8df; */
  border-radius: 10px;
  margin: auto auto 0 auto;
  padding: 5px 30px;
  box-shadow: 3px 3px 5px rgba(52, 30, 107, 0.7),
    inset 1px 1px 5px rgba(52, 30, 107, 0.3);
  @media screen and (max-width: 768px) {
    margin: 20px auto;
    padding: 10px;
  }
`;
const InfoContainer = styled.div`
  color: #82589f;
  text-shadow: 2px 2px 2px gray;
`;
const Info = styled.div`
  /* background-color: yellow; */
`;
const Day = styled.div`
  font-size: 60px;
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
const S = styled.div`
  display: flex;
`;
const SE = styled.div`
  display: flex;
`;
const ST = styled.div`
  padding-right: 10px;
  /* border: 1px solid #c3b8df; */
`;
const SC2 = styled.div``;
const SC = styled.div`
  border-bottom: 3px solid #c3b8df;
  animation: changeY infinite 2s;
  -webkit-animation: changeY infinite 2s;
  @keyframes changeY {
    0% {
      -webkit-transform: scaleY(0.9);
      transform: scaleY(0.9);
    }
    50% {
      -webkit-transform: scaleY(0.7);
      transform: scaleY(0.7);
    }
    100% {
      -webkit-transform: scaleY(0.9);
      transform: scaleY(0.9);
    }
  }
`;
const Content = styled.div`
  padding: 10px 20px;
  @media screen and (max-width: 768px) {
    padding: 6px 12px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 40px;
  font-size: 35px;
  @media screen and (max-width: 768px) {
    font-size: 24px;

    padding: 10px 0px;
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
  @media screen and (max-width: 768px) {
    margin: 20px 0px;
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
  }
`;
const AllContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  /* z-index: -999; */
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 90vh;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 90vh;
  }
`;

Schedule.propTypes = {
  changeDay: PropTypes.number.isRequired,
  prevButton: PropTypes.func.isRequired,
  nextButton: PropTypes.func.isRequired
};

export default Schedule;

import React from "react";
import styled from "styled-components";
import { DAY1, MINI_GROUND } from "../data/ScheduleData";

const Schedule = () => (
  <AllContainer id="schedule">
    <TitleContainer>
      <Title>일정</Title>
    </TitleContainer>

    <ButtonContainer>
      <Button>{"◀️"}</Button>
      <Button>{"▶️"}</Button>
    </ButtonContainer>

    <DayContainer>
      <Day>5/11 (월)</Day>
      <ContentContainer>
        <InfoContainer>
          <Info>대운동장 특설무대 운영시간표</Info>
        </InfoContainer>
        <Content>
          {DAY1.map(data => (
            <S key={data.id}>
              <ST>{data.time}</ST>
              <SC>{data.content}</SC>
            </S>
          ))}
        </Content>
      </ContentContainer>

      <ContentContainer>
        <InfoContainer>
          <Info>학생회관 소공연장</Info>
        </InfoContainer>
        <Content>
          {MINI_GROUND.map(data => (
            <S key={data.id}>
              <ST>{data.time}</ST>
              <SC>{data.content}</SC>
            </S>
          ))}
        </Content>
      </ContentContainer>

      <ContentContainer>
        <InfoContainer>
          <Info>기타 프로그램</Info>
        </InfoContainer>
        <Extra>
          <SC>바자회 : 대운동장 중앙부스 옆</SC>
          <SC>푸드트럭 : 학생회관 1층 입구 주변</SC>
          <SC>출발 드림팀 : 에어 바운스 설치(대운동장)</SC>
          <SC>오락기 및 인형뽑기 : (중앙부스)</SC>
        </Extra>
      </ContentContainer>
    </DayContainer>
  </AllContainer>
);
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  font-size: 40px;
`;

const Extra = styled.div`
  flex-direction: column;
  display: flex;
`;
const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
`;
const InfoContainer = styled.div`
  background-color: yellow;
`;
const Info = styled.div`
  /* background-color: yellow; */
`;
const Day = styled.div`
  font-size: 60px;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const S = styled.div`
  display: flex;
`;
const ST = styled.div`
  padding-right: 10px;
`;
const SC = styled.div``;
const Content = styled.div`
  border: 2px solid blue;
  padding: 5px 5px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  font-size: 35px;
  @media screen and (max-width: 480px) {
    font-size: 25px;
    padding-left: 0px;
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
  @media screen and (max-width: 480px) {
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
  @media screen and (max-width: 480px) {
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
    height: 90vh;
  }
`;

export default Schedule;

import React from "react";
import styled from "styled-components";
import { DAY1 } from "../data/ScheduleData";

function Schedule() {
  return (
    <AllContainer id="schedule">
      <TitleContainer>
        <Title>일정</Title>
      </TitleContainer>
      <DayContainer>
        <Day>5/10</Day>
        <ContentContainer>
          <Content>
            {DAY1.map(data => (
              <S key={data.id}>
                <ST>{data.time}</ST>
                <SText>{data.content}</SText>
              </S>
            ))}
          </Content>
        </ContentContainer>
      </DayContainer>
    </AllContainer>
  );
}
const DayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Day = styled.div``;
const S = styled.div`
  display: flex;
`;
const ST = styled.div`
  padding-right: 10px;
`;
const SText = styled.div``;
const Content = styled.div`
  /* display: flex; */
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-left: 100px; */
  /* width: 900px; */
  @media screen and (max-width: 480px) {
    padding-left: 0px;
  }
  /* background-color: red; */
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

import React from "react";
import styled from "styled-components";

function Schedule() {
  return (
    <ScheduleContainer id="schedule">
      <TitleContainer>
        <Content>일정</Content>
      </TitleContainer>
    </ScheduleContainer>
  );
}
const Content = styled.div``;
const ScheduleContainer = styled.div`
  height: 100vh;
  background-color: purple;

  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  background-color: red;

  /* align-items: center; */
`;

export default Schedule;

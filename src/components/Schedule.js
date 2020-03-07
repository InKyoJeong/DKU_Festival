import React from "react";
import styled from "styled-components";

function Schedule() {
  return (
    <ScheduleContainer id="schedule">
      <Content>일정</Content>
    </ScheduleContainer>
  );
}
const Content = styled.div``;
const ScheduleContainer = styled.div`
  height: 100vh;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Schedule;

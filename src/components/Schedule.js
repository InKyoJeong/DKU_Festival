import React from "react";
import styled from "styled-components";
import { DAY1, DAY2, DAY3, MINI_GROUND } from "../data/ScheduleData";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronCircleRight,
  faChevronCircleLeft,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import "./schedule.css";
library.add(faChevronCircleLeft, faChevronCircleRight, faClock);

const Schedule = ({
  changeDay,
  // changeDayOfWeek,
  prevButton,
  nextButton
}) => (
  <AllContainer id="schedule">
    <TitleContainer>
      <Title>일정</Title>
    </TitleContainer>

    <ButtonContainer>
      {/* <Button onClick={prevButton}> */}
      <FontAwesomeIcon
        icon={"chevron-circle-left"}
        className="schedule-button"
        onClick={prevButton}
      />
      {/* </Button> */}
      {/* <Button onClick={nextButton}> */}
      <FontAwesomeIcon
        icon={"chevron-circle-right"}
        className="schedule-button"
        onClick={nextButton}
      />
      {/* </Button> */}
    </ButtonContainer>

    <DayContainer>
      <Day>
        <FontAwesomeIcon icon={"clock"} />
        {` 5/${changeDay + 11}`}
      </Day>
      {/* <DayOfWeek>{changeDayOfWeek}</DayOfWeek> */}
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
                  <SC>
                    {data.content}
                    {/* {data.content > 7
                      ? `${data.content(0, 7)}...`
                      : data.content} */}
                  </SC>
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
          <SE>* 바자회 : 대운동장 중앙부스 옆</SE>
          <SE>* 푸드트럭 : 학생회관 1층 입구 주변</SE>
          <SE>* 출발 드림팀 : 에어 바운스 설치(대운동장)</SE>
          <SE>* 오락기 및 인형뽑기 : (중앙부스)</SE>
        </Extra>
      </ContentContainer>
    </DayContainer>
  </AllContainer>
);
// const DayOfWeek = styled.span``;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin: auto 1%;
  width: 8%;
  height: 50%;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    margin: 0% auto;
    width: 50%;
    height: 7%;
  }
`;

const Extra = styled.div`
  flex-direction: column;
  display: flex;
  font-size: 23px;
  font-style: italic;
  padding: 10px 10px 0 10px;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10% auto;
  padding: 5px 10px;
  /* width: 100vw; */
  box-shadow: 3px 3px 5px rgba(52, 30, 107, 0.7),
    inset 1px 1px 5px rgba(52, 30, 107, 0.3);
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 10px auto;
    padding: 10px;
  }
`;
const InfoContainer = styled.div`
  color: #82589f;
  text-shadow: 2px 2px 2px gray;
`;
const Info = styled.div``;
const Day = styled.div`
  /* width: 100px;
  height: 5%; */
  font-size: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
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
  padding: 0px;
  font-size: 1.8rem;
  /* margin: auto; */

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
    padding: 3%;
    margin: auto;
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
    padding-top: 10%;
  }
`;
const AllContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

Schedule.propTypes = {
  changeDay: PropTypes.number.isRequired,
  prevButton: PropTypes.func.isRequired,
  nextButton: PropTypes.func.isRequired
};

export default Schedule;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ClockPresenter = ({ days, hours, minutes, seconds }) => (
  <ClockContainer>
    <FestaTitle>Dankook Festival</FestaTitle>
    <DaysContainer>
      <Days>D-{days}</Days>
    </DaysContainer>
    <TimeContainer>
      <Hours>{hours < 10 ? `0${hours}` : hours}:</Hours>
      <Minutes>{minutes < 10 ? `0${minutes}` : minutes}:</Minutes>
      <Seconds>{seconds < 10 ? `0${seconds}` : seconds}</Seconds>
    </TimeContainer>
  </ClockContainer>
);
const FestaTitle = styled.div`
  display: flex;
  margin-bottom: 100px;
  text-shadow: #fff 0px 0px 15px, #ff2d95 0px 0px 30px, #ff2d95 0px 0px 40px,
    #ff2d95 0px 0px 50px, #ff2d95 0px 0px 75px,
    2px 2px 2px rgba(156, 70, 206, 0);
  justify-content: center;
  font-size: 100px;
  color: white;
  /* opacity: 0.9; */
  animation: moving infinite 3s;
  -webkit-animation: moving infinite 3s;
  @keyframes moving {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    20% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    40% {
      -webkit-transform: rotate(-8deg);
      transform: rotate(-8deg);
    }
    60% {
      -webkit-transform: rotate(10deg);
      transform: rotate(10deg);
    }
    80% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 20%;
  }
`;

const DaysContainer = styled.div`
  display: flex;
  font-size: 40px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
const TimeContainer = styled.div`
  display: flex;
  opacity: 0.9;
  color: #e6e1f3;
  justify-content: center;
  align-items: center;
  background: #355c7d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #c06c84,
    #6c5b7b,
    #355c7d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #c06c84,
    #6c5b7b,
    #355c7d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 10px;
  text-shadow: 5px 5px 5px black;
  width: 93%;
  font-size: 5rem;
  margin-top: 10%;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    text-shadow: 2px 2px 2px black;
    margin-top: 5%;
  }
`;
const ClockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  height: 100%;
  /* width: 100%; */
`;
const Days = styled.h1`
  color: white;
`;
const Hours = styled.h1``;
const Minutes = styled.h1``;
const Seconds = styled.h1``;

ClockPresenter.propTypes = {
  days: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hours: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minutes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  seconds: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default ClockPresenter;

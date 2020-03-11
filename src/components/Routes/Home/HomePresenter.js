import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Clock from "../../Clock";
import LineUp from "../../LineUp";
import Schedule from "../../Schedule";
import Promo from "../../Promo";

const HomePresenter = ({
  changeDay,
  changeDayOfWeek,
  prevButton,
  nextButton
}) => (
  <>
    <Container1 id="main">
      <Clock />
    </Container1>

    <Container id="line">
      <LineUp />
    </Container>

    <Container id="schedule">
      <Schedule
        changeDay={changeDay}
        prevButton={prevButton}
        nextButton={nextButton}
        changeDayOfWeek={changeDayOfWeek}
      />
    </Container>

    <Container id="promo">
      <Promo />
    </Container>
  </>
);

const Container1 = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;

HomePresenter.propTypes = {
  changeDay: PropTypes.number.isRequired,
  changeDayOfWeek: PropTypes.string,
  prevButton: PropTypes.func.isRequired,
  nextButton: PropTypes.func.isRequired
};

export default HomePresenter;

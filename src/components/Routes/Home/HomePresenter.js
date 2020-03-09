import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Cover from "../../Cover";
import LineUp from "../../LineUp";
import Schedule from "../../Schedule";
import Promo from "../../Promo";

const HomePresenter = ({ changeDay, prevButton, nextButton }) => (
  <>
    <Container1 id="main">
      <Cover />
    </Container1>

    <Container id="line">
      <LineUp />
    </Container>

    <Container id="schedule">
      <Schedule
        changeDay={changeDay}
        prevButton={prevButton}
        nextButton={nextButton}
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
  display: flex;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

HomePresenter.propTypes = {
  changeDay: PropTypes.number.isRequired,
  prevButton: PropTypes.func.isRequired,
  nextButton: PropTypes.func.isRequired
};

export default HomePresenter;

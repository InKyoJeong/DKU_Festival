import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Clock from "../../Clock";
import LineUp from "../../LineUp";
import Schedule from "../../Schedule";
import Promo from "../../Promo";
// import Cover from "../../Cover";

const HomePresenter = ({
  changeDay,
  changeDayOfWeek,
  prevButton,
  nextButton
}) => (
  <>
    <Container id="main" style={{ backgroundColor: `black` }}>
      <Clock />
    </Container>

    {/* <Container2>
        <Cover />
      </Container2> */}

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
// const Container2 = styled.div`
//   height: 30vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Container1 = styled.div`
//   height: 100vh;
//   width: 100vw;
//   background-color: black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

HomePresenter.propTypes = {
  changeDay: PropTypes.number.isRequired,
  changeDayOfWeek: PropTypes.string,
  prevButton: PropTypes.func.isRequired,
  nextButton: PropTypes.func.isRequired
};

export default HomePresenter;

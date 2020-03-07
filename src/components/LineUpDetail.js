import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SingerContainer = styled.div`
  justify-content: center;
  border-radius: 3.5px;

  box-shadow: 3px 4px 6px -1px rgba(0, 0, 0, 0.5),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    margin-right: 30px;
  }
  @media screen and (max-width: 480px) {
    justify-content: center;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
const PictureContainer = styled.div`
  border-top-left-radius: 3.5px;
  border-top-right-radius: 3.5px;
`;
const PictureItem = styled.img`
  width: 210px;
  height: 210px;
  border-top-left-radius: 3.5px;
  border-top-right-radius: 3.5px;
  vertical-align: middle;
  @media screen and (max-width: 480px) {
    width: 125px;
    height: 125px;
  }
`;

const Name = styled.div`
  border-bottom-left-radius: 3.5px;
  border-bottom-right-radius: 3.5px;
  display: flex;
  justify-content: center;
  background-color: blue;
  background: -webkit-linear-gradient(-180deg, #4b3a58, #8674a8, #a87fca);
  background: linear-gradient(-180deg, #4b3a58, #8674a8, #a87fca);
  padding: 4px 0px;
  color: white;
  @media screen and (max-width: 480px) {
  }
`;
const NameItem = styled.div`
  font-size: 20px;
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

const LineUpDetail = ({ name, image }) => (
  <SingerContainer>
    <PictureContainer>
      <PictureItem src={image} />
    </PictureContainer>
    <Name>
      <NameItem>{name}</NameItem>
    </Name>
  </SingerContainer>
);

LineUpDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default LineUpDetail;

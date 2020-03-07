import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SingerContainer = styled.div`
  justify-content: center;
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
const PictureContainer = styled.div``;
const PictureItem = styled.img`
  width: 210px;
  height: 210px;
  vertical-align: middle;
  @media screen and (max-width: 480px) {
    width: 140px;
    height: 140px;
  }
`;

const Name = styled.div`
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

const Detail = ({ name, image }) => (
  <SingerContainer>
    <PictureContainer>
      <PictureItem src={image} />
    </PictureContainer>
    <Name>
      <NameItem>{name}</NameItem>
    </Name>
  </SingerContainer>
);

Detail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Detail;

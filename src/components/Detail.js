import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// state가 필요없는 컴포넌트의 경우 class형이 아니여도 됨
const SingerContainer = styled.div`
  /* display: flex; */
  justify-content: center;
  color: white;
`;

const Day = styled.div`
  /* justify-content: center; */
  text-align: center;
`;
const Picture = styled.div``;
const PictureItem = styled.img`
  width: 200px;
  height: 200px;
`;

const Name = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NameItem = styled.div``;

const Detail = ({ name, image }) => (
  <SingerContainer>
    <PictureItem src={image} />
    <Name>{name}</Name>
  </SingerContainer>
);

Detail.propTypes = {
  day: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Detail;

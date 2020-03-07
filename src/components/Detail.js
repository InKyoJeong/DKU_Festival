import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// state가 필요없는 컴포넌트의 경우 class형이 아니여도 됨
const SingerContainer = styled.div`
  /* display: flex; */
  justify-content: center;
`;

const PictureItem = styled.img`
  width: 230px;
  height: 230px;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
`;
const NameItem = styled.div`
  /* display: flex;
  justify-content: center;
  text-align: center; */
`;

const Detail = ({ name, image }) => (
  <SingerContainer>
    <PictureItem src={image} />
    <Name>
      <NameItem>{name}</NameItem>
    </Name>
  </SingerContainer>
);

Detail.propTypes = {
  day: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Detail;

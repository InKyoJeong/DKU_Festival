import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  flex-direction: row;
  display: flex;
  align-items: center;
  background-color: black;
  opacity: 0.8;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  @media screen and (max-width: 768px) {
  }
`;

const Item = styled(AnchorLink)`
  /* justify-content: flex-end; */
  color: white;
  padding: 0px 10px;
  font-size: 21px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
  &:hover {
    color: red;
    transition: ease-in-out 0.3s;
  }
`;
const MenuContainer = styled.div`
  align-items: center;
  margin-left: auto; /* 오른쪽 정렬 */
  padding-right: 30px;
  @media screen and (max-width: 420px) {
    padding-right: 5px;
  }
`;
const TitleContainer = styled.div`
  flex: none;
`;

export default () => (
  <HeaderContainer>
    <TitleContainer>
      <Item>DKU FESTIVAL</Item>
    </TitleContainer>
    <MenuContainer>
      <Item href="#red">레드</Item>
      <Item href="#blue">파랑</Item>
    </MenuContainer>
  </HeaderContainer>
);

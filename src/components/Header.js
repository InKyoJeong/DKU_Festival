import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  flex-direction: row;
  display: flex;
  align-items: center;
  background: #4ecdc4; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    -45deg,
    #9889b4,
    #5889c2,
    #0441b3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    -45deg,
    #9889b4,
    #5889c2,
    #0441b3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
  &:hover {
    color: black;
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
const LogoContainer = styled.div`
  /* background-color: blue; */
  padding: 10px 2px;
  margin-left: 5px;
  &:hover {
    background-color: black;
    transition: ease-in-out 0.3s;
  }
`;

const Logo = styled(AnchorLink)`
  color: white;
  padding: 0px 10px;
  font-size: 21px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
`;
export default () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo href="#main">DKU FESTIVAL</Logo>
    </LogoContainer>
    <MenuContainer>
      <Item href="#main">레드</Item>
      <Item href="#red2">라인업</Item>
      <Item href="#blue">파랑</Item>
    </MenuContainer>
  </HeaderContainer>
);

import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  flex-direction: row;
  display: flex;
  align-items: center;
  background: #e55d87; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #6a3093,
    #e55d87
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #6a3093,
    #e55d87
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  opacity: 0.9;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  @media screen and (max-width: 768px) {
    height: 50px;
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
  @media screen and (max-width: 480px) {
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
  @media screen and (max-width: 480px) {
    padding-right: 5px;
  }
`;

const LogoContainer = styled.div`
  /* background-color: blue; */
`;

const Logo = styled(AnchorLink)`
  margin-left: 5px;

  &:hover {
    background-color: black;
    padding: 10px 10px;
    transition: ease-in-out 0.2s;
  }
  color: white;
  padding: 0px 10px;
  font-size: 21px;
  font-weight: bold;
  text-shadow: 2px 2px 2px black;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;
export default () => (
  <HeaderContainer>
    <LogoContainer>
      <Logo href="#main">DKU FESTIVAL</Logo>
    </LogoContainer>
    <MenuContainer>
      <Item href="#line">라인업</Item>
      <Item href="#schedule">일정</Item>
      <Item href="#promo">부스</Item>
    </MenuContainer>
  </HeaderContainer>
);

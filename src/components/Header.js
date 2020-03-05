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
  z-index: 2;
  @media screen and (max-width: 768px) {
    flex: 1;
    height: 60px;
  }
`;

const NavContainer = styled.div`
  align-items: center;
  /* justify-content: center; */
  display: flexbox;
  flex: 3;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

const NavItem = styled(AnchorLink)`
  color: white;
  padding: 0px 10px;
  @media screen and (max-width: 768px) {
    padding: 0px 5px;
  }
`;

export default () => (
  <HeaderContainer>
    <NavContainer>
      <NavItem href="#red">레드</NavItem>
      <NavItem href="#blue">파랑</NavItem>
    </NavContainer>
  </HeaderContainer>
);

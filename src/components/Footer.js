import React from "react";
import styled from "styled-components";

const FootContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  opacity: 0.9;
  background: #e55d87; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6a3093, #e55d87);
  background: linear-gradient(to right, #6a3093, #e55d87);
  @media screen and (max-width: 768px) {
    height: 60px;
  }
`;
const Item = styled.div`
  color: #332f3c;
  font-size: 13px;
`;

const ItemLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 15px;
  padding-left: 5px;
`;

export default () => (
  <FootContainer>
    <Item>
      Copyright © {new Date().getFullYear()},
      <ItemLink href="https://github.com/InKyoJeong">InKyo Jeong.</ItemLink> All
      Rights Reserved.
    </Item>
  </FootContainer>
);

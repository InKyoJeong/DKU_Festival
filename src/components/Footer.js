import React from "react";
import styled from "styled-components";

const FootContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: skyblue;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  /* position: fixed;
  bottom: 0; */
`;
const Item = styled.div`
  color: gray;
  font-size: 14px;
`;
const ItemLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 18px;
  padding-left: 5px;
`;

export default () => (
  <FootContainer>
    <Item>
      Copyright © {new Date().getFullYear()},
      <ItemLink href="https://github.com/InKyoJeong">InKyo Jeong</ItemLink>
    </Item>
  </FootContainer>
);

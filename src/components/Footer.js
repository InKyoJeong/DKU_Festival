import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faInstagram, faInfoCircle);

const FootContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  opacity: 0.9;
  font-size: 15px;
  /* padding-right: 20%; */
  background: #e55d87; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #6a3093, #e55d87);
  background: linear-gradient(to right, #6a3093, #e55d87);
  @media screen and (max-width: 768px) {
    height: 80px;
    font-size: 13px;
  }
`;
const Item = styled.div`
  color: #332f3c;
`;

const ItemLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;
  padding-left: 5px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
const IconContainer = styled.div`
  width: 100px;
  height: 22px;
  padding-left: 15px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding-left: 10px;
    width: 80px;

    height: 20px;
  }
`;
export default () => (
  <FootContainer>
    <Item>
      Copyright © {new Date().getFullYear()},<ItemLink>InKyo Jeong</ItemLink>{" "}
      All Rights Reserved.
    </Item>
    <IconContainer>
      <a
        href="https://ingg.io"
        style={{
          boxShadow: `none`,
          paddingLeft: `5px`,
          color: `black`
        }}
      >
        <FontAwesomeIcon icon={"info-circle"} />
      </a>
      <a
        href="https://github.com/InKyoJeong"
        style={{ boxShadow: `none`, paddingLeft: `5px`, color: `black` }}
      >
        <FontAwesomeIcon icon={["fab", "github"]} />
      </a>
      <a
        href="https://instagram.com/in.gg"
        style={{ boxShadow: `none`, paddingLeft: `5px`, color: `black` }}
      >
        <FontAwesomeIcon icon={["fab", "instagram"]} />
      </a>
    </IconContainer>
  </FootContainer>
);

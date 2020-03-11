import React from "react";
import styled from "styled-components";

function Promo() {
  return (
    <AllContainer id="promo">
      <TitleContainer>
        <Title>부스 홍보</Title>
      </TitleContainer>
      <ContentContainer>
        <Content>ㅏㅏㅏ</Content>
        <Content>ㅏㅏㅏ</Content>
      </ContentContainer>
    </AllContainer>
  );
}
const Content = styled.div``;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding-left: 100px; */
  /* width: 900px; */
  @media screen and (max-width: 480px) {
    padding-left: 0px;
  }
  /* background-color: red; */
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 33px;
  font-weight: bold;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.59);
  color: white;
  background: -webkit-linear-gradient(90deg, #664ca1, #a381b9, #c3b8df);
  background: linear-gradient(90deg, #664ca1, #a381b9, #c3b8df);
  width: 300px;
  height: 100%;
  z-index: 1;
  @media screen and (max-width: 768px) {
    margin: 5% auto;
    font-size: 23px;
    width: 50%;
    height: 50px;
    padding: 5px 0px;
    border-radius: 8px;
  }
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    /* padding-top: 10%; */
  }
`;
const AllContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 85%;
  }
`;

export default Promo;

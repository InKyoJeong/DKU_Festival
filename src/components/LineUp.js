import React from "react";
import Detail from "./Detail";
import "./LineUp.css";
import TT from "../assets/tt.jpeg";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LineUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LineUp = () => (
  <LineUpContainer>
    <DetailContainer>
      <Detail name="첫날가수" image={TT} />
      {/* <Detail name="첫날가수 2" image={TT} /> */}
    </DetailContainer>
    <DetailContainer>
      <Detail name="둘째가수" image={TT} />
      <Detail name="둘째가수2" image={TT} />
    </DetailContainer>
  </LineUpContainer>
);

export default LineUp;

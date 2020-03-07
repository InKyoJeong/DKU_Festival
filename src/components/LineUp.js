import React from "react";
import Detail from "./Detail";
import styled from "styled-components";

import TT from "../assets/tt.jpeg";
import GF from "../assets/gf.png";

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LineUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: red;
`;

const LineUp = () => (
  <LineUpContainer>
    <DetailContainer>
      <Day>5/00</Day>
      <Detail name="첫날가수" image={TT} />
      {/* <Detail name="첫날가수 2" image={TT} /> */}
    </DetailContainer>
    <DetailContainer>
      <Day>5/00</Day>
      <Detail name="둘째가수" image={GF} />
      <Detail name="둘째가수2" image={TT} />
    </DetailContainer>
    <DetailContainer>
      <Day>5/00</Day>
      <Detail name="셋째날가수" image={TT} />
      <Detail name="셋째날가수2" image={TT} />
    </DetailContainer>
  </LineUpContainer>
);

export default LineUp;

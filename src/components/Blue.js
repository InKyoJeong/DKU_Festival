import React from "react";
import styled from "styled-components";
function Blue() {
  return (
    <div id="blue">
      <GG />
    </div>
  );
}
const GG = styled.div`
  padding: 5px;
  background-color: blue;
  width: 100vw;
  height: 100vh;
`;

export default Blue;

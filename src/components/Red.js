import React from "react";
import styled from "styled-components";
function Red() {
  return (
    <div id="red">
      <RR />
    </div>
  );
}
const RR = styled.div`
  padding: 5px;
  background-color: black;
  opacity: 0.1;
  width: 100vw;
  height: 100vh;
`;

export default Red;

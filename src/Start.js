import React from "react";
import styled from "styled-components";

const Start = () => {
  return (
    <WhoAreYou>
      <h2>
        나는 <NameStyled>최재근</NameStyled> 에 대하여 잘 알고 있을까?
      </h2>
    </WhoAreYou>
  );
};
export default Start;

const WhoAreYou = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 1em;
`;
const NameStyled = styled.span`
  background-color: skyblue;
  padding: 0.3rem;
  border-radius: 15px;
`;

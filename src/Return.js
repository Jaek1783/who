import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Return = (props) => {
  let navigate = useNavigate();
  const name = useSelector((state) => state.Quest.name);
  return (
    <GoBackStyled>
      <h2>{name}에 대해서 다시 생각해 보세요.</h2>
      <AnserButton
        onClick={() => {
          navigate(-1);
        }}
      >
        이전 문제로
      </AnserButton>
    </GoBackStyled>
  );
};
export default Return;

const GoBackStyled = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const AnserButton = styled.button`
  width: 100px;
  height: 50px;
  padding: 10px;
  margin: 1rem;
  font-size: 14px;
  background-color: skyblue;
  border: none;
  border-radius: 15px;
`;

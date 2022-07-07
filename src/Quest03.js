import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Question01 = (props) => {
  // const data = useSelector((state) => state.Bucket.list);
  const data = useSelector((state) => state.Quest.QnA);
  let score = useSelector((state) => state.Quest.score);
  console.log(score);
  let navigate = useNavigate();
  return (
    <ContainerStyled>
      <h2>
        <NameStyled>최재근</NameStyled> 에 대한 문제
      </h2>
      <TextStyled>
        Q 0{data[2].id}. 최재근의 {data[2].text}
      </TextStyled>
      <AnserButton
        onClick={() => {
          navigate("/score");
        }}
      >
        O
      </AnserButton>
      <AnserButton
        onClick={() => {
          navigate("/score");
        }}
      >
        X
      </AnserButton>
    </ContainerStyled>
  );
};
export default Question01;

const ContainerStyled = styled.div`
  /* background-color: skyblue; */
  margin: 0 auto;
  text-align: center;
`;

const TextStyled = styled.p`
  padding-top: 1rem;
`;

const AnserButton = styled.button`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin: 1rem;
  font-size: 20px;
  background-color: skyblue;
  border: none;
  border-radius: 15px;
`;
const NameStyled = styled.span`
  background-color: skyblue;
  padding: 0.3rem;
  border-radius: 15px;
`;

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

const Return = (props) => {
  let navigate = useNavigate();
  const data = useSelector(state=>state.Quest.QnA);
  const user_answer_list = useSelector(state=>state.Quest.user_answer_list);
    const _score = (100/ data.length) * data.filter((q,idx)=>{
      return q.answer === user_answer_list[idx];
     
    }).length
  return (
    <GoBackStyled>
      <h3>
        와우~ 최재근씨 본인이세요?
        <br />
        최재근 에 대해서 잘 알고 계시네요
      </h3>
      <Hstyled>
        <NameStyled>{_score}</NameStyled>점 입니다.
      </Hstyled>
      <MessageStyled
        onClick={() => {
          navigate("/message");
        }}
      >
        <NameStyled>최재근</NameStyled> 에게 한마디 하러가기
      </MessageStyled>
    </GoBackStyled>
  );
};
export default Return;

const GoBackStyled = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Hstyled = styled.h3`
  padding-top: 50px;
`;
const NameStyled = styled.span`
  background-color: skyblue;
  padding: 0.3rem;
  border-radius: 15px;
`;
const MessageStyled = styled.h3`
  margin-top: 2rem;
  padding: 2rem;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 15px;
  :hover {
    background-color: skyblue;
  }
  :hover span {
    background-color: #ccc;
  }
`;

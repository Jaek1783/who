import React,{ useEffect} from "react";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAnswer } from "./Quest";
const Question01 = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Quest.QnA);
  const user_answer_list = useSelector((state)=> state.Quest.user_answer_list);
  let navigate = useNavigate();
  const setAnswer = (user_answer)=>{
    dispatch(addAnswer(user_answer));
  };

useEffect(()=>{
  if(user_answer_list.length === data.length){
    // const _score = (100/ data.length) * data.filter((q,idx)=>{
    //   return q.answer === user_answer_list[idx];
     
    // }).length
    navigate('/score');
    return;
  }
},[user_answer_list]);

if(user_answer_list.length === data.length){
  return null;
}

  return (
    <ContainerStyled>
      <h2>
        <NameStyled>최재근</NameStyled> 에 대한 {user_answer_list.length+1}번 문제
      </h2>
      <TextStyled>
          
         <p>Q {data[user_answer_list.length].text}</p>
          
      </TextStyled>
      <AnserButton onClick={()=>{
        setAnswer(true);
      }}>
        O
      </AnserButton>
      <AnserButton onClick={()=>{
        setAnswer(false);
      }}>
        X
      </AnserButton>
    </ContainerStyled>
  );
};
export default Question01;

const ContainerStyled = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const TextStyled = styled.div`
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

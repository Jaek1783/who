import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CreateUser } from "./Desc";
const Message = () => {
  let dispatch = useDispatch();
  const desc = useRef(null);
  let navigate = useNavigate();
  const name = useSelector((state) => state.Quest.name);
  const data = useSelector(state=>state.Quest.QnA);
  const user_answer_list = useSelector(state=>state.Quest.user_answer_list);
    const _score = (100/ data.length) * data.filter((q,idx)=>{
      return q.answer === user_answer_list[idx];
     
    }).length
  return (
    <Container>
      <dl>
        <Hstyled>
          <NameStyled>최재근</NameStyled> 에게 한마디 해주세요
        </Hstyled>
        {/* <input type="text" placeholder="남기실 이름을 적어주세요" ref={title} /> */}
        <TextStyled>
          <textarea placeholder="좋은 말만 부탁드려요" ref={desc}></textarea>
        </TextStyled>
      </dl>
      <ButtonStyled
        onClick={() => {
          navigate("/ranking");
          dispatch(
            CreateUser({
              score: _score,
              name: name,
              desc: desc.current.value
            })
          );
          // console.log(title.current.value, desc.current.value);
        }}
      >
        남기고 랭킹보러가기
      </ButtonStyled>
    </Container>
  );
};
export default Message;
const Container = styled.div`
  text-align: center;
  /* input {
    width: 200px;
    height: 30px;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 2rem;
  } */
`;
const Hstyled = styled.h3`
  padding-top: 10px;
`;
const NameStyled = styled.span`
  background-color: skyblue;
  padding: 0.3rem;
  border-radius: 15px;
`;

const TextStyled = styled.dd`
  padding-top: 2rem;
  textarea {
    padding: 10px;
    width: 270px;
    height: 70px;
  }
`;

const ButtonStyled = styled.button`
  border: none;
  background-color: skyblue;
  padding: 1rem;
  border-radius: 15px;
  font-weight: bold;
  font-size: 15px;
`;

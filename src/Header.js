import React from "react";
import Icon from "./img/icon.jpg";
import styled from "styled-components";
import { useSelector,useDispatch } from "react-redux";
import { resetAnswer } from "./Quest";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const user_answer_list = useSelector((state)=> state.Quest.user_answer_list);
  return (
    <HeaderStyled>
      <img src={Icon} alt="who are you 이미지" />
        <HStyled onClick={()=>{
          dispatch(resetAnswer());
          navigate("/who");
        }}>처음으로</HStyled>
    </HeaderStyled>
  );
};
export default Header;

const HeaderStyled = styled.header`
display:flex;
flex-direction: column;
justify-content:center;
  width: 100%;
  padding: 1.5em 0;
  margin: 0 auto;
  img {
    width:50%;
    margin:0 auto;
  }
`;

const HStyled = styled.h5`
  width: 50%;
  margin: 0 auto;
  border-radius: 15px;
  background-color: skyblue;
  padding: 0.5rem;
  color: #000;
  text-align: center;
  cursor:pointer;
`;

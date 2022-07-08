import React from "react";
import Start from "./Start";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { CreateName} from "./Quest";

const Main = (props) => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  return (
    <div className="allwrap">
      <Start />
      <InputStyle>
        <input
          type="text"
          placeholder="도전할 당신은 누구신가요??"
          ref={props.nameRef}
        />
      </InputStyle>
      <Btn>
        <input
          type="button"
          value="입력하고 시작히기"
          onClick={() => {
            const value = props.nameRef.current.value;
            props.setNum((props.numRef.current = 0));
            dispatch(CreateName(value));
            navigate("/question");
          }}
          className="btn submit"
        />
      </Btn>
    </div>
  );
};
export default Main;

const InputStyle = styled.p`
  width: 80%;
  margin: 0 auto 1rem;
  input {
    width: 100%;
    height: 3em;
    border-radius: 15px;
    padding: 1em;
    box-sizing: border-box;
    border: none;
    background-color: skyblue;
  }
`;
const Btn = styled.p`
  width: 200px;
  margin: 0 auto;
  .btn {
    width: 200px;
    padding: 1em;
    box-sizing: border-box;
    border-radius: 15px;
    border: none;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin: 10px;
  }
  .btn:active {
    border: none;
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
    box-sizing: border-box;
  }
`;

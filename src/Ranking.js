import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const Message = () => {
  const data = useSelector((state) => state.Desc.rank);


  const userList = data.sort((a, b) => {
    return b.score - a.score;
  });
  // userList();
  return (
    <Container>
      <HeaderStyle>{data.length}명 중 당신의 랭킹은?</HeaderStyle>
      <ScrollContainer>
        <ul>
          {data.map((list, index) => {
            return (
              <li key={index}>
                <h2>{index + 1}등 </h2>
                <p>{list.name}</p>
                <div>{list.desc}</div>
              </li>
            );
          })}
        </ul>
      </ScrollContainer>
      <ButtonContainer>
        <button className="left">공유하기</button>
      </ButtonContainer>
    </Container>
  );
};
export default Message;

const Container = styled.div`
  text-align: center;
  margin-top:-.5rem;
  ul {
    padding: 1rem;
  }
  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 15px;
    margin-bottom: 1rem;
    list-style-type: none;
    background-color: #fff;
    div {
      width: 50%;
      font-size: 0.7rem;
    }
  }
`;
const HeaderStyle = styled.header`
border-top:1px solid #ccc;
border-bottom:1px solid #ccc;
  margin: 0 auto;
  padding: 0.5rem 0;
`;
const ScrollContainer = styled.div`
  height: 300px;
  overflow-y: scroll;
  margin: 0 auto;
  background-color: skyblue;
`;
const ButtonContainer = styled.div`
  padding:.5rem;
  button {
    padding: 0.5rem;
    border: none;
    background-color: #fff;
    border: 1px solid #ccc;
  }
  button:active {
    background-color: #efefef;
  }
  button.left {
    border-radius: 15px;
  }
`;

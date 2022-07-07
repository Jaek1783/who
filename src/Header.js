import React from "react";
import { Link } from "react-router-dom";
import Icon from "./img/icon.jpg";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyled>
      <img src={Icon} alt="who are you 이미지" />
      <Link to="/">
        <HStyled>처음으로</HStyled>
      </Link>
    </HeaderStyled>
  );
};
export default Header;

const HeaderStyled = styled.header`
  width: 200px;
  padding: 1.5em 0;
  margin: 0 auto;
  img {
    width: 100%;
  }
  a {
    text-decoration: none;
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
`;

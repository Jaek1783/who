import "./styles.css";
import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Main from "./Main";
import Quiz from "./Quiz";
import Return from "./Return";
import Score from "./Score";
import Ranking from "./Ranking";
import Message from "./Message";
import Spinner from "./Spinner";

export default function App() {
  const numRef = useRef(0);
  const [num, setNum] = useState(numRef.current);
  const name = useSelector((state) => state.Quest.name);
  const is_loaded = useSelector(state=>state.Desc.is_loaded); 
  const nameRef = useRef(null);


  return (
    <div className="App">
      {!is_loaded && <Spinner/>}
      <Header />
      <Routes>
        <Route
          path="/who"
          element={
            <Main
              name={name}
              nameRef={nameRef}
              num={num}
              setNum={setNum}
              numRef={numRef}
            />
          }
        />
        <Route
          path="/question"
          element={<Quiz num={num} setNum={setNum} numRef={numRef} />}
        />
        <Route path="/score" element={<Score />} />
        <Route path="/message" element={<Message />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </div>
  );
}

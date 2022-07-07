import "./styles.css";
import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";
import Main from "./Main";
import Quest01 from "./Quest01";
import Quest02 from "./Quest02";
import Quest03 from "./Quest03";
import Return from "./Return";
import Score from "./Score";
import Ranking from "./Ranking";
import Message from "./Message";

export default function App() {
  const numRef = useRef(0);
  const [num, setNum] = useState(numRef.current);
  const name = useSelector((state) => state.Quest.name);
  // const [name, setName] = useState("최재근");
  const nameRef = useRef(null);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
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
          path="/question01"
          element={<Quest01 num={num} setNum={setNum} numRef={numRef} />}
        />
        <Route
          path="/question02"
          element={<Quest02 num={num} setNum={setNum} numRef={numRef} />}
        />
        <Route
          path="/question03"
          element={<Quest03 num={num} setNum={setNum} numRef={numRef} />}
        />
        <Route path="/goBack" element={<Return />} />
        <Route path="/score" element={<Score />} />
        <Route path="/message" element={<Message />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </div>
  );
}

// Question List
const initState = {
  name: ["최재근"],
  QnA: [
    { id: 1, text: "나이는 30대이다." },
    { id: 2, text: "성별은 남자이다." },
    { id: 3, text: "동생은 2명이다." }
  ],
  score: 0
};
//Actirsa
const CREATE = "question/CREATE";
const NAME = "question/NAME";
const SCORE = "question/SCORE";
//Action Creators
export function CreateQuestion(question) {
  return { type: CREATE, question: question };
}
export function CreateName(name) {
  return { type: NAME, name };
}
export function UpdateScore(score) {
  return { type: SCORE, score };
}
//Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case "question/CREATE": {
      const new_QnA = [...state.QnA, action.qusetion];
      return { QnA: new_QnA };
    }
    case "question/NAME": {
      const new_name = [action.name];
      const new_QnA = [...state.QnA, action.qusetion];
      return { name: new_name, QnA: new_QnA };
    }
    case "question/SCORE": {
      const new_score = [action.score];
      const new_name = [...state.name, action.name];
      const new_QnA = [...state.QnA, action.qusetion];
      return { score: new_score, name: new_name, QnA: new_QnA };
    }
    default:
      return state;
  }
}

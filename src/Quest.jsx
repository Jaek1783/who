// Question List
const initState = {
  name:"",
  QnA: [
    { id: 1, text: "나이는 30대이다.", answer:false },
    { id: 2, text: "성별은 남자이다.", answer:true },
    { id: 3, text: "동생은 3명이다.", answer:false },
    { id: 4, text: "취업준비생이다", answer:true },
    { id: 5, text: "군필이다", answer:true },
  ],
  user_answer_list:[]
};
//Actirsa
const CREATE = "question/CREATE";
const NAME = "question/NAME";
const ANSWER = "question/ANSWER";
const RESET = "question/RESET";
//Action Creators
export function CreateQuestion(question) {
  return { type: CREATE, question: question };
}
export function CreateName(name) {
  return { type: NAME, name };
}
export const addAnswer = (user_answer) => {
  return{type : ANSWER, user_answer}; 
}
export const resetAnswer = (user_answer)=>{
  return {type:RESET, user_answer};
}
//Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case "question/CREATE": {
      const new_QnA = [...state.QnA, action.qusetion];
      return { QnA: new_QnA };
    }
    case "question/NAME": {
      const new_name = action.name;
      const new_QnA = [...state.QnA];
      const new_answer = [...state.user_answer_list];
      return { name: new_name, QnA: new_QnA, user_answer_list:new_answer };
    }
    case "question/ANSWER": {
      const new_answer = [...state.user_answer_list, action.user_answer];
      return {...state, user_answer_list:new_answer};
    }
    case "question/RESET": {
      return {...state, user_answer_list:initState.user_answer_list};
    }
    default:
      return state;
  }
}

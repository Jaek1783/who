const initState = {
  rank: [
    {
      score: 100,
      name: "박위영",
      desc: "국가의 세입·세출의 결산,"
    },
    {
      score: 90,
      name: "금하진",
      desc: "국가 및 법률이 정한 단체의 회계검사와 "
    },
    {
      score: 70,
      name: "광휘윤",
      desc:
        "찰을 하기 위하여 대통령 소속하에 감사원을 둔다. 국회의원과 정부는 법률안을 제출할 수 있다."
    },
    {
      score: 80,
      name: "임윤찬",
      desc: " 감사원을 둔다. 국회의원과 정부는 법률안을 제출할 수 있다."
    }
  ]
}; 

const CREATE = "user/CREATE";

export function CreateUser(ranking) {
  return { type: CREATE, ranking };
}

//Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case "user/CREATE": {
      const new_rank = [...state.rank, action.ranking];
      return { rank: new_rank };
    }

    default:
      return state;
  }
}

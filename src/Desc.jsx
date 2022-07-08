import {db} from "./firebase";
import {addDoc, collection, getDocs} from "firebase/firestore";
const initState = {
  rank: [],
  is_loaded : true
}; 

const CREATE = "user/CREATE";
const LOAD = "user/LOAD";
const ISLOADED = "user/ISLOADED";

export const CreateUser = (ranking) => {
  return { type: CREATE, ranking };
}

export const LoadUser = (ranking_list) => {
  return { type: LOAD, ranking_list};
}
export const isLoaded = (is_loaded)=>{
  return{type:ISLOADED,   is_loaded};
}
//middlewares

export const loadRankFB = () =>{ 
  return async function (dispatch){
    dispatch(isLoaded(false));
const ranking_data = await getDocs(collection(db,"rank"));
let rank_list = [];
ranking_data.forEach((r)=>{
  rank_list.push({...r.data()});
});
dispatch(LoadUser(rank_list));
  }
}
export const addRankFB = (user_ranking)=> {
  return async function (dispatch){
    const docRef = await addDoc(collection(db, "rank"), user_ranking);
  }
}

//Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case "user/LOAD" : {
      return{state, rank:action.ranking_list, is_loaded:true}
    }
    case "user/CREATE": {
      const new_rank = [...state.rank, action.rank];
      return { rank: new_rank };
    }
    case "user/ISLOADED":{
      return{...state, is_loaded:action.is_loaded};
    };
    default:
      return state;
  }
}

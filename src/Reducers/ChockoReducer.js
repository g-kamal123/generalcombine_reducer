import { buy_chocko } from "../Actions/Action";

const initialState = {
    chocklate:1000
}
export const ChockoReducer = (state=initialState,action)=>{
    switch(action.type){
        case buy_chocko: return {...state,chocklate:state.chocklate-action.payload};
        default: return state;
    }
}
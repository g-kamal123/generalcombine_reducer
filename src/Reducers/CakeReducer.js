import { buy_Cake } from "../Actions/Action";

const initialState = {
    cake:200
}
export const CakeReducer = (state=initialState,action)=>{
    switch(action.type){
        case buy_Cake: return {...state,cake:state.cake-action.payload};
        default: return state;
    }
}
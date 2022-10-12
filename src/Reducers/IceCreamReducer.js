import { buy_Icecream } from "../Actions/Action";

const initialState = {
    icecream:400
}
export const IceCreamReducer = (state=initialState,action)=>{
    switch(action.type){
        case buy_Icecream: return {...state,icecream:state.icecream-action.payload};
        default: return state;
    }
}
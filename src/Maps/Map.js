import { Action } from "../Actions/Action"

export const mapToState =(state)=>{
    return {
        ...state
    }
}
export const mapToDispatch =(dispatch)=>{
    return{
        buy:(type,payload)=>dispatch(Action(type,payload))
    }
}
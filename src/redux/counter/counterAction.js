import { DECREMENTBY5, DECREMENT, INCREMENT, INCREMENTBY5 } from "./counterType"


export const increment =()=>{
    return {
        type:INCREMENT
    }
}

export const decrement =()=>{
    return {
        type:DECREMENT,
    }
}

export const decrementBy5 =()=>{
    return {
        type:DECREMENTBY5,
        payload:5
    }
}

export const incrementBy5 =(number)=>{
    return {
        type:INCREMENTBY5,
        payload:number
    }
}
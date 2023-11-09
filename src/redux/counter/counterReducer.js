import { DECREMENT, DECREMENTBY5, INCREMENT, INCREMENTBY5 } from "./counterType";

const initialState ={
    count:0,
    count2:0,
}

const counterReducer =(state=initialState,action)=>{
switch (action.type) {
    case INCREMENT: return{
        ...state,
        count:state.count+1
    }
    case DECREMENT: return{
        ...state,

        count:state.count-1
    }
    case DECREMENTBY5: return{
        ...state,

        count2:state.count2-action.payload
    }
    case INCREMENTBY5: return{
        ...state,
        count2:state.count2+action.payload
    }
    // using the spread operator (...state) to ensure that the existing state is not mutated when updating the "count2" property.


    default:
       return state
}
}

export default counterReducer
import { SUBMIT_FORM } from "./formType"


const initialState = {
    name:"emp",
    age:0
}


const formReducer = (state=initialState,{type,payload})=>{
    
    switch (type) {
        case SUBMIT_FORM:return{
            ...state,
            name :payload.name,
            age:payload.age
        }
            
    
        default:
            return state
    }
}


export default formReducer
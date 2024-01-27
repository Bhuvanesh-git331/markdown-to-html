import { GET_DATA } from "../constants/constants"


export default (state, action)=>{

 switch(action.type){

    case GET_DATA:
        return {
            ...state,
            textData : action.payload
        }

    default:
        return state
 }
}
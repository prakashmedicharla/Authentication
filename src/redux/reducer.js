import { LOGIN_SUCCESS,LOGOUT_SUCCESS } from "./constants";
const authApp= LOGIN_SUCCESS;
const initialState={
    isAuthenticated:localStorage.getItem(authApp)||false,
    user:{email:'suryaprakashm94@gmail.com',pass:'surya@0032'}
};

const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem('authApp', true)

        return{
            ...state,
            isAuthenticated:true,
        }

        case LOGOUT_SUCCESS:
            localStorage.setItem('authApp', false)

            return{
                ...state,
                isAuthenticated:false,
            }
            default:
                return state;
    }

}
export default authReducer;
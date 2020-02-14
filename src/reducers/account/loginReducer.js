let initialState = {
    isLogIn: false,
    authError: null,
    account: null
}

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLogIn:true,
                authError:null,
                account: action.account
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                isLogIn: false,
                authError: 'Login Faled',
                account: null
            }
        case 'SIGN_OUT_SUCCESS':{
            return {
                ...state,
                isLogIn: false,
                authError: null,
                account: null
            }
        }
        default:
            return state
    }
}

export default myReducer;
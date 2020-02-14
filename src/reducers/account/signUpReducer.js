let initialState = {
    signUpError:null,
    isSignUp:false,
}

const myReducer = (state=initialState, action) => {
    switch(action.type){
        case 'SIGN_UP_SUCCESS':
            return{
                ...state,
                signUpError: null,
                isSignUp: true
            }
        case 'SIGN_UP_ERROR':
            return {
                ...state,
                signUpError: 'Sign Up Faled',
                isSignUp: false
            }
        default:
            return state;
    }
}
export default myReducer
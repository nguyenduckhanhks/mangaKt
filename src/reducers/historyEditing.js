let initialState = [];

const myReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'FETCH_HISTORY_EDITING':
            return action.history
        default:
            return state
    }
}

export default myReducer;
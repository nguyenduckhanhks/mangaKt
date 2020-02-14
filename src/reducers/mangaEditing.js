let initialState = {};

const myReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_MANGA_EDITING':
            state = action.manga;
            return state;
        default:
            return state;
    }
}
export default myReducer
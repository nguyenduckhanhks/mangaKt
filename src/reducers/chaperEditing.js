let initialState = {};

const myReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH_CHAPER_EDITING":
            state = action.chaper;
            return state;
        default:
            return state;
    }
}

export default myReducer;
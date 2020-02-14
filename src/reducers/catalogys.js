var initialState = [];

const myReducer = (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_CATALOGYS":
            state = action.catalogys;
            return [...state];
        default:
            return state;
    }
}

export default myReducer;
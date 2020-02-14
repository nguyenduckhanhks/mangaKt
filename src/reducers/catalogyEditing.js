var initialState = {};

const myReducer = (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_CATALOGY_EDITING":
            state = action.catalogyEditing;
            return state;
        default:
            return state
    }
}

export default myReducer;
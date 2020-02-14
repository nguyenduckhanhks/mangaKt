import { combineReducers } from 'redux';
import catalogys from './catalogys';
import catalogyEditing from './catalogyEditing';
import mangaEditing from './mangaEditing';
import chaperEditing from './chaperEditing';
import authLogin from './account/loginReducer';
import signUpReducer from './account/signUpReducer';
import historyEditing from './historyEditing';

const myReducer = combineReducers({
    catalogys,
    catalogyEditing,
    mangaEditing,
    chaperEditing,
    authLogin,
    signUpReducer,
    historyEditing
});
export default myReducer;
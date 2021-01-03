import {combineReducers} from 'redux';
import reducer from './signupInfo';
import isLoggged from './loginreducer';


export const rootReducers = combineReducers({
    contact: reducer,
    islogged: isLoggged,
});

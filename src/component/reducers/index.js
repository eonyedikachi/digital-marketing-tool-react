import {combineReducers} from 'redux';
import reducer from './signupInfo';
import isLoggged from './loginreducer';
import showme from './showreducer';


export const rootReducers = combineReducers({
    contact: reducer,
    islogged: isLoggged,
    show:showme
});

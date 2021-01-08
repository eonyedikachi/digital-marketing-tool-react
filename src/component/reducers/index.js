import {combineReducers} from 'redux';
import reducer from './signupInfo';
import isLoggged from './loginreducer';
import showme from './showreducer';
import template from './savetempreducer';


export const rootReducers = combineReducers({
    contact: reducer,
    islogged: isLoggged,
    show:showme,
    save_template:template
});

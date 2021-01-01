import {combineReducers} from 'redux';
import reducer from './signupInfo';


export const rootReducers = combineReducers({
    contact: reducer
});

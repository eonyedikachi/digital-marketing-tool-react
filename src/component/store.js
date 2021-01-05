import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { rootReducers} from './reducers/index';


const middleware =[thunk]

const store= createStore(rootReducers, 
    compose(applyMiddleware(...middleware)))

export default store

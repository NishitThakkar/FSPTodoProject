import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { abcd } from './REDUCER/abcd_Reducer';
import { user } from './REDUCER/User_Reducer';

var rootReducer = combineReducers({user, abcd})

var store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store



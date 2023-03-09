import { combineReducers } from 'redux';
import homeReducer from './homeReducer';

const appReducer = combineReducers({
   homeReducer,
});
const rootReducer = (state, action) => {
   return appReducer(state, action);
}

export default rootReducer;
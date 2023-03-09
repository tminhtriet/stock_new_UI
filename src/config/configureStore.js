import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from '../stores/reducers';

export default function configureStore(preloadedState) {
   return createStore(rootReducer, applyMiddleware(thunkMiddleware));
}
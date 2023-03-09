import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function homeReducer(state = initialState.homeReducer, action) {
   switch (action.type) {
      case types.CHANGE_LANGUAGE:
         return state.set('language', action.data);
      default:
         return state;
   }
}
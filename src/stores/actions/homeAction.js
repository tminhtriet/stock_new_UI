import * as types from '../constants/actionTypes';

export function changeLanguage(data) {
  return { type: types.CHANGE_LANGUAGE, data };
}

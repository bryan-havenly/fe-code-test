import { combineReducers } from 'redux-immutable';
import designers           from './designers';
import rooms               from './rooms';

export default combineReducers({
  designers,
  rooms,
});

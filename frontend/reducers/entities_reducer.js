import { combineReducers } from "redux";
import UsersReducer from './users_reducer';
import FeedsReducer from './feeds_reducer';

export default combineReducers({
  users: UsersReducer,
  feeds: FeedsReducer
});
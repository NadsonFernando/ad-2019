import { combineReducers } from "redux";

import FriendReducer from "./FriendReducer";
import RaffleReducer from "./RaffleReducer";

export default combineReducers({
  friend: FriendReducer,
  raffle: RaffleReducer,
});

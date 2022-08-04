import { combineReducers } from "redux";
import leagueReducer from "./league_reducer";

const rootReducer = combineReducers({
  leagueReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

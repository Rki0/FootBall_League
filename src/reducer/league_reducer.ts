import { SAVE_BIG_LEAGUE, SAVE_LEAGUE_PLAYER } from "../action/types";
import { saveBigLeague, saveLeaguePlayer } from "../action/league_action";

// initialState의 타입 정의
type LeagueStateType = {
  leagueData: Array<any>;
  playerRank: Array<any>;
};

// initialState
const initialState = {
  leagueData: [],
  playerRank: [],
};

// 리듀서 파라미터 중 action의 타입 정의
type LeagueActionType =
  | ReturnType<typeof saveBigLeague>
  | ReturnType<typeof saveLeaguePlayer>;

export default function leagueReducer(
  state: LeagueStateType = initialState,
  action: LeagueActionType
) {
  switch (action.type) {
    case SAVE_BIG_LEAGUE:
      // return { ...state, leagueData: action.payload };
      return { ...state, leagueData: state.leagueData.concat(action.payload) };

    case SAVE_LEAGUE_PLAYER:
      return { ...state, playerRank: state.playerRank.concat(action.payload) };

    default:
      return state;
  }
}

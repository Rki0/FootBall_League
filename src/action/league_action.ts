import { SAVE_BIG_LEAGUE, SAVE_LEAGUE_PLAYER } from "./types";

//
interface saveBigLeaguePropsType {
  test: any;
}

export function saveBigLeague(test: saveBigLeaguePropsType) {
  return {
    type: SAVE_BIG_LEAGUE,
    payload: test,
  };
}

//
interface saveLeaguePlayerPropsType {
  player: any;
}

export function saveLeaguePlayer(player: saveLeaguePlayerPropsType) {
  return {
    type: SAVE_LEAGUE_PLAYER,
    payload: player,
  };
}

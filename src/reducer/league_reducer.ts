// 액션 타입 정의
const LOAD_BIG_LEAGUE = "load_big_league" as const;

// 액션 함수 정의
// 4대 리그 정보 가져오기
export const loadBigLeague = () => ({ type: LOAD_BIG_LEAGUE });

// 초기값 타입 정의
interface InitailStateType {
  leagueData: Array<any>;
}

// 초기값 정의
const initialState: InitailStateType = {
  leagueData: [],
};

// 리듀서의 action props에 명시할 타입 정의
type LeagueActionType = ReturnType<typeof loadBigLeague>;

export default function leagueReducer(
  state: InitailStateType = initialState,
  action: LeagueActionType
) {
  switch (action.type) {
    case LOAD_BIG_LEAGUE:
      return { ...state };

    default:
      return state;
  }
}

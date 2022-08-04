//// Standings.tsx ////
// 컴포넌트 props 타입
export interface PropsType {
  standings: Array<any>;
}

// option 태그에 들어갈 값들의 타입
export interface OptionsType {
  range: string;
  season: string;
}

// API로 받아올 수 있는 시즌들
export const options: OptionsType[] = [
  {
    range: "2010 - 11",
    season: "2010",
  },
  {
    range: "2011 - 12",
    season: "2011",
  },
  {
    range: "2012 - 13",
    season: "2012",
  },
  {
    range: "2013 - 14",
    season: "2013",
  },
  {
    range: "2014 - 15",
    season: "2014",
  },
  {
    range: "2015 - 16",
    season: "2015",
  },
  {
    range: "2016 - 17",
    season: "2016",
  },
  {
    range: "2017 - 18",
    season: "2017",
  },
  {
    range: "2018 - 19",
    season: "2018",
  },
  {
    range: "2019 - 20",
    season: "2019",
  },
  {
    range: "2020 - 21",
    season: "2020",
  },
  {
    range: "2021 - 22",
    season: "2021",
  },
  {
    range: "2022 - 23",
    season: "2022",
  },
];

// LeaguePageHeader.tsx //
// props로 받아온 것들 중 사용할 것들만 타입 선언
export interface LeaguePageHeaderPropsType {
  logo: string;
  name: string;
  country: string;
}

export interface HeaderPropsType {
  leagueData: LeaguePageHeaderPropsType;
}

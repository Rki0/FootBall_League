// LandingPage.tsx //
export interface LandingPageType {
  country: string;
  pathname: string;
}

export const choice: LandingPageType[] = [
  {
    country: "England",
    pathname: "england",
  },
  {
    country: "Spain",
    pathname: "spain",
  },
  {
    country: "Germany",
    pathname: "germany",
  },
  {
    country: "Italy",
    pathname: "italy",
  },
];

// ChoiceLeague.tsx //
// 컴포넌트 props의 타입
export interface PropsType {
  country: string;
  pathname: string;
}

import React from "react";
import { useParams } from "react-router-dom";

function PlayerRank() {
  const { country } = useParams();
  console.log(country);

  return <div>선수 개인 순위 페이지</div>;
}

export default PlayerRank;

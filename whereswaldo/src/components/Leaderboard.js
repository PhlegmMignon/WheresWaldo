import React from "react";

export default function Leaderboard(props) {
  const CARD_STYLE = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  return (
    <div id="leaderboard">
      Leaderboard
      {props.scoreList.map((item) => {
        return (
          <div className="card" style={CARD_STYLE}>
            <div className="names">{item.name}</div>
            <div className="scores">{item.score / 100}s</div>
          </div>
        );
      })}
    </div>
  );
}

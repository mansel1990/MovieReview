import React from "react";

const UserScore = ({ score, size = "large" }) => {
  const percentage = score * 10;
  let scoreColor = "#29d958";
  if (score < 5) {
    scoreColor = "#ff0022";
  } else if (score >= 5 && score < 7) {
    scoreColor = "#ff9900";
  }
  const circleCls =
    size === "large" ? "score-circle-large" : "score-circle-small";
  return (
    <div className="user-score">
      <div className={`score-circle ${circleCls}`}>
        <svg viewBox="0 0 36 36">
          <path
            className="score-circle-back"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="score-circle-front"
            style={{ "--score-color": `${scoreColor}` }}
            strokeDasharray={`${percentage}, 100`}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="score-value">{score}</div>
      </div>
      <div className="score-label">
        <div>User</div>
        <div>Score</div>
      </div>
    </div>
  );
};

export default UserScore;

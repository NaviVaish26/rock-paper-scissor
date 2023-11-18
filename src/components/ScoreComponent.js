import "./ScoreComponent.css";

function ScoreComponent({ playerScore, computerScore }) {
  return (
    <div className="score">
      <h2>Score</h2>
      <h1>
        {playerScore}/{computerScore}
      </h1>
    </div>
  );
}

export default ScoreComponent;

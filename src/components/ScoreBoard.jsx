import '../styles/ScoreBoard.css';

export function ScoreBoard({ score, best }) {
  return (
    <div className="score-board">
      <h2>score: {score}</h2>
      <h2>Best: {best}</h2>
    </div>
  );
}

export default ScoreBoard;

import "./ButtonsComponents.css";
import hands from "../consts/hands";
// import { setGameState } from "../App.js";

function ButtonsComponent({ setGameState }) {
  return (
    <div className="buttons-component">
      <Button handInfo={hands.rock} setGameState={setGameState} />
      <Button handInfo={hands.paper} setGameState={setGameState} />
      <Button handInfo={hands.scissor} setGameState={setGameState} />
    </div>
  );
}

function Button({ handInfo, setGameState }) {
  const deltaScore = function (playerHandInfo, computerHandInfo) {
    if (playerHandInfo.name === computerHandInfo.name) return [0, 0];
    else if (playerHandInfo.beats === computerHandInfo.name) return [1, 0];
    else return [0, 1];
  };

  const getComputerHandInfo = function () {
    const handsArray = [hands.rock, hands.paper, hands.scissor];
    const randomIndex = Math.floor(Math.random() * 3);
    const randomHand = handsArray[randomIndex];
    return randomHand;
  };

  const handleClick = function () {
    const computerHandInfo = getComputerHandInfo();
    const [playerScoreDelta, compurterScoreDelta] = deltaScore(
      handInfo,
      computerHandInfo
    );
    setGameState((prevState) => {
      return {
        ...prevState,
        playerHandInfo: handInfo,
        computerHandInfo: computerHandInfo,
        playerScore: prevState.playerScore + playerScoreDelta,
        computerScore: prevState.computerScore + compurterScoreDelta,
      };
    });
  };

  return (
    <button className="action-button" onClick={handleClick}>
      {handInfo.emoji}
    </button>
  );
}

export default ButtonsComponent;

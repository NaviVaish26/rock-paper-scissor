import logo from "./logo.svg";
import "./App.css";
import EmojiHandSelection from "./components/EmojiHandSelection";
import ScoreComponent from "./components/ScoreComponent";
import TextHandSelection from "./components/TextHandSelection";
import ButtonsComponent from "./components/ButtonsComponent";
// import React from "react";
import hands from "./consts/hands";
import { useState } from "react";

function App() {
  const [gameState, setGameState] = useState({
    playerHandInfo: hands.rock,
    computerHandInfo: hands.rock,
    playerScore: 0,
    computerScore: 0,
  });

  return (
    <div className="App">
      <EmojiHandSelection
        emojiPlayerHand={gameState.playerHandInfo.emoji}
        emojiComputerHand={gameState.computerHandInfo.emoji}
      />
      <ScoreComponent
        playerScore={gameState.playerScore}
        computerScore={gameState.computerScore}
      />
      <TextHandSelection
        textPlayerHand={gameState.playerHandInfo.name}
        textComputerHand={gameState.computerHandInfo.name}
      />
      <ButtonsComponent setGameState={setGameState} />
    </div>
  );
}

export default App;

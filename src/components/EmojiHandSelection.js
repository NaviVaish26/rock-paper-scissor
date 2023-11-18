import "./EmojiHandSelection.css";

function EmojiHandSelection({ emojiPlayerHand, emojiComputerHand }) {
  return (
    <div className="emoji-hand-selection">
      <h1>{emojiPlayerHand}</h1>
      <h1>{emojiComputerHand}</h1>
    </div>
  );
}

export default EmojiHandSelection;

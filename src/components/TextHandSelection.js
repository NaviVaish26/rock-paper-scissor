// import
import "./TextHandSelection.css";

function TextHandSelection({ textPlayerHand, textComputerHand }) {
  return (
    <div className="text-hand-selection">
      <SelectionBox name="Player" selectedHand={textPlayerHand} />
      <SelectionBox name="Computer" selectedHand={textComputerHand} />
    </div>
  );
}

function SelectionBox({ name, selectedHand }) {
  return (
    <div className="selection-box">
      <h3>{name} Chose</h3>
      <h1>{selectedHand}</h1>
    </div>
  );
}

export default TextHandSelection;

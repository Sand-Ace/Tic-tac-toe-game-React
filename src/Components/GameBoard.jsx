export default function GameBoard({ onSelectSquare, board }) {
  function handleSelectSquare(rowIndex, colIndex) {}
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          {
            <ol>
              {row.map((playerSymbol, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                    disabled={playerSymbol !== null}
                  >
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          }
        </li>
      ))}
    </ol>
  );
}

// => GameBoard logic but dynamically rendered using Map function
/*<ol id="game-board">
<li>
  <ol>
    <li>
      <button></button>
    </li>
    <li>
      <button></button>
    </li>
    <li>
      <button></button>
    </li>
  </ol>
</li>
<li>
  <ol>
    <li>
      <button></button>
    </li>
    <li>
      <button></button>
    </li>
    <li>
      <button></button>
    </li>
  </ol>
</li>
<li>
  <ol>
    <li>
      <button></button>
    </li>
    <li>
      <button></button>
    </li>
    <li>
      <button></button>
    </li>
  </ol>
</li>
</ol>
*/

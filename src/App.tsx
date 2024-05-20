import { useState } from "react";

type SquareValue = "X" | "O" | null;

function Square({ value }: { value: SquareValue }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}

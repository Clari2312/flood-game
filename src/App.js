import "./App.css";
import Square from "./components/Square/Square";
import { useState } from "react";
import Button from "./components/Square/Button/Button";

const App = () => {
  // state = {
  //   matrixSize: { rows: 5, columns: 5 },
  //   matrix: [[]],
  // };

  const [matrixSizeState] = useState({
    rows: 5,
    columns: 5,
  });

  const [matrixState, setMatrix] = useState([[]]);

  const handleClick = () => {
    const min = 1;
    const max = 99;
    let matrix = [],
      row;

    for (let r = 0; r < matrixSizeState.rows; r++) {
      row = [];

      for (let c = 0; c < matrixSizeState.columns; c++) {
        const rand = Math.floor(Math.random() * (max - min + 1) + min);
        row.push(rand);
      }

      matrix.push(row);
    }
    setMatrix(matrix);
  };

  return (
    <div className="App">
      <Square
        matrixSizeRow={matrixSizeState.rows}
        matrixSizeCol={matrixSizeState.columns}
        matrixRand={matrixState}
      />
      <Button onClick={handleClick.bind(this)} />
    </div>
  );
};

export default App;

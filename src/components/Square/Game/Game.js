import Row from "../Row/Row";
import Cell from "../Row/Cell/Cell";

const Game = (props) => {
  return (
    <div className="grid">
      {props.matrixRand.map((row, ri) => (
        <Row key={ri}>
          {row.map((cellValue, ci) => (
            <Cell
              key={`${ri}-${ci}`}
              indexRow={ri}
              indexCol={ci}
              matrixRand={props.matrixRand}
            />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Game;

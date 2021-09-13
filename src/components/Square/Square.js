import Game from "./Game/Game";
import "./Square.css";

const Square = (props) => {
  return (
    <div>
      <Game
        rows={props.matrixSizeRow}
        columns={props.matrixSizeCol}
        matrixRand={props.matrixRand}
      />
    </div>
  );
};

export default Square;

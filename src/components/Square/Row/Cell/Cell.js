import "./Cell.css";

const Cell = (props) => {
  let className = "cell";
  return (
    <div className={className}>
      {props.matrixRand.length > 0
        ? props.matrixRand[props.indexRow][props.indexCol]
        : null}
    </div>
  );
};

export default Cell;

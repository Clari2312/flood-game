import { Component } from "react";
import "./Cell.css";

class Cell extends Component {
  render() {
    let className = "cell";
    return (
      <div className={className}>
        {this.props.matrixRand.length > 0
          ? this.props.matrixRand[this.props.indexRow][this.props.indexCol]
          : null}
      </div>
    );
  }
}

export default Cell;

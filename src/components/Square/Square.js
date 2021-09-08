import { Component } from "react";
import Game from "./Game/Game";
import "./Square.css";

class Square extends Component {
  render() {
    // console.log("square... ",this.props)
    return (
      <div>
        <Game
          rows={this.props.matrixSizeRow}
          columns={this.props.matrixSizeCol}
          matrixRand={this.props.matrixRand}
        />
      </div>
    );
  }
}

export default Square;

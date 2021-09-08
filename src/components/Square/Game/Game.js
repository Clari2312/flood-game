import { Component } from "react";
import Row from "../Row/Row";
import Cell from "../Row/Cell/Cell";

class Game extends Component {
  render() {
    return (
      <div className="grid">
        {this.props.matrixRand.map((row, ri) => (
          <Row key={ri}>
            {row.map((cellValue, ci) => (
              <Cell
                key={`${ri}-${ci}`}
                indexRow={ri}
                indexCol={ci}
                matrixRand={this.props.matrixRand}
              />
            ))}
          </Row>
        ))}
      </div>
    );
  }
}

export default Game;

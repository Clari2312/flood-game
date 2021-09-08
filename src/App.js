import "./App.css";
import Square from "./components/Square/Square";
import { Component } from "react";
import Button from "./components/Square/Button/Button";

class App extends Component {
  state = {
    matrixSize: { rows: 5, columns: 5 },
    matrix: [[]],
  };

  handleClick = () => {
    const min = 1;
    const max = 99;
    // this.setState({ random: this.state.random + rand });
    let matrix = [],
      row;

    for (let r = 0; r < this.state.matrixSize.rows; r++) {
      row = [];

      for (let c = 0; c < this.state.matrixSize.columns; c++) {
        const rand = Math.floor(Math.random() * (max - min + 1) + min);
        row.push(rand);
      }

      matrix.push(row);
    }
    console.log("sono la variabile matrix..", matrix);
    this.setState({
      matrix: matrix,
    });
  };

  render() {
    return (
      <div className="App">
        <Square
          matrixSizeRow={this.state.matrixSize.rows}
          matrixSizeCol={this.state.matrixSize.columns}
          matrixRand={this.state.matrix}
        />
        <Button onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;

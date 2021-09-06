
import { Component } from "react";
import Row from "../Row/Row";
import Cell from "../Row/Cell/Cell";

class Game extends Component {
  
      
  numberHandler=() => {
   const min = 1;
   const max = 10;
   const rand = Math.floor(Math.random() * (max - min+1)+ min);
   this.setState({  
    value: this.state.value+rand });
 }


  render() {
    let matrix = [], row;

    for (let r = 0; r < this.props.rows; r++) {

      row = [];

      for (let c = 0; c < this.props.columns; c++) {

        row.push(`${r}${c}`);

      }

      matrix.push(row);

    }
console.log("numero...",matrix)
    return (

      <div className="grid">

        {matrix.map((row, ri) => (

          <Row key={ri} >

            {row.map(cellId => <Cell key={cellId} id={cellId} cellNumber={this.numberHandler}/>)}

          </Row>

        ))}

      </div>

    );

  }
}

export default Game;
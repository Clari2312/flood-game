import { Component } from "react";
import Game from "./Game/Game";
import "./Square.css"

class Square extends Component {
  render() {
    // console.log("square... ",this.props)
    return (
      <div>
        <Game rows={5} columns={5} onGenerate={this.props.onGenerate}/>
      </div>
    );
  }
}

export default Square;
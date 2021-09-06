import './App.css';
import Square from "./components/Square/Square";
import {Component} from "react";
import Button from "./components/Square/Button/Button";

class App extends Component {
  state = { random: 0 };
      
     handleClick=() => {
      const min = 1;
      const max = 5;
      const rand = Math.floor(Math.random() * (max - min+1)+ min);
      this.setState({ random: this.state.random + rand });
    }
  render() {
  return (
    <div className="App">
      <Square onGenerate={this.handleClick.bind(this)}/>
      <Button onClick={this.handleClick.bind(this)}/>
    </div>
  );
}
}

export default App;

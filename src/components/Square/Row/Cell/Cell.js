import {Component} from "react";
import "./Cell.css";

class Cell extends Component {
  state = { value: 0 };

  componentDidMount(){
    this.setState({
      value:this.props.cellNumber
    })
  }
  

    render() {
      let className = "cell";
      console.log("cel...",this.props)
      return (
        <div className={className} value={this.props.cellNumber}>
        
        </div>
      );  
    }  
  }
  
  export default Cell;
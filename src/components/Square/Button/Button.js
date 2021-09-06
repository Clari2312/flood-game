import { Component} from "react";

class Button extends Component {
    
    render() {
      return (
        <div>
          <button onClick={this.props.onClick}>Generate</button>
          
        </div>
      );
    }
  }

  export default Button;
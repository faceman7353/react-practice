import React, {Component} from 'react';


class Action extends Component{
    render(){
      return(
        <footer>
          <h3>{this.props.title}</h3>
          {this.props.desc}
      </footer>
      );
    }
  }

  
export default Action;
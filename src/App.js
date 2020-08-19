import React from 'react';

import './App.css';
//props in React
// props.children 
class Main extends React.Component{
  letsShow(){
    alert("HI EVERYONE ...")
  }
  render(){
    return(
      <div>
        <h1> Hi {this.props.name}</h1>
        <button style={{padding: 20.0, 
        background: 'purple',
        color: 'white',
        border: 'none',
        cursor: 'pointer'

        }} onClick={this.letsShow}>
          CLICK HERE 
        </button>
        <h1>{this.props.children}</h1>
      </div>
    )
  }
}

export default Main

import React, { Component} from "react";
import "./css/main.css";
import { hot } from 'react-hot-loader/root';

class App extends Component{
  constructor (){
    super()
    this.state ={
      monsters: [ 
        {
        name: 'Red Dragon'
        },
        {
          name: 'Blue Dragon'
        },
        {
          name: 'Green Dragon'
        },
      ]
    }
  };

  changeText () {
    this.setState({
      string: 'Hello React changed Ho!'
    })
  }

  render(){
    return(
      <div className="App">
        { this.state.monsters.map( (element, index) => <h1 key={index.toString()}> {element.name}</h1>)}
      </div>
    );
  }
}

export default hot(App);
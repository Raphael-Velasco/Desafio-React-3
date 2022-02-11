import React, {Component} from 'react'

class Desafio extends Component{

  state ={
    name:"Raphael",
    age: 17,
    food: "Lasanha",
    músicas:["Deixa acontecer", "Eu e você sempre", "Sinais"]

  }

  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
        <h3>{this.state.food}</h3>
        <ul>
         <li>{this.state.músicas[0]}</li>
         <li>{this.state.músicas[1]}</li>
         <li>{this.state.músicas[2]}</li> 
        </ul>
      </div>
    )
  }




}
export default Desafio
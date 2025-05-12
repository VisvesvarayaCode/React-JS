import React from "react";
class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        count:0
    }
  }

  increment =()=>{
    this.setState({
        count: this.state.count+2
    })
  }


  render(){
    return(
        <>
        <h1>Run Successful</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={()=>{this.setState({count:this.state.count-2})}}>Decrement</button>
        <button onClick={()=>{this.setState({count:0})}}>Reset</button>
        
        </>
    )
  }
}
export default Counter;
import Counter from "./counter";
import React , {Component} from "react";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      mount: true,
      ignoreProp:0,
      seed:40
        }

        this.mountCounter = () => this.setState({
          mount:true
          })

        this.unmountCounter = () => this.setState({
          mount:false
        })

        this.ignoreProp = () => this.setState({
          ignoreProp: Math.random()
        })

        this.seedGenerator= () => this.setState({
          seed:Number.parseInt(Math.random()*100)
        }
        )
  }



    
  render(){
    return (
        <div className="App">
          <button onClick={this.mountCounter} disabled={this.state.mount} >Mount Counter</button>
          <button onClick={this.unmountCounter} disabled={!this.state.mount} >UnMount Counter</button>
          <button onClick={this.ignoreProp}>ignore prop</button>
          <button onClick={this.seedGenerator}>generate seed</button>
          {this.state.mount ? <Counter ignoreProp={this.state.ignoreProp}
          seed = {this.state.seed} />:null}
        </div>
      );
    }
}

export default App;

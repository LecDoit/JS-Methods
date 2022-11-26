import React, {Component} from "react";

class Counter extends Component{
    constructor(props){
        console.log('constructor')
        super(props)

        this.state = {
            counter:0,
            seed:0
        }

        this.increment = () => this.setState({
            counter:this.state.counter+1
        })
        
        this.decrement = () => this.setState({
            counter:this.state.counter-1
        })

    }

    static getDerivatedStateFromProps(props,state){
        if(props.seed && state.seed !== props.seed){
            return {
                seed:props.seed,
                counter:props.seed
            }
        }

        return null
    }

    componentDidMount(){
        console.log('component did mount')
        console.log('------------------')
    }

    shouldComponentUpdate(nextProps,nextState){

        if(nextProps.ignoreProp && this.props.ignoreProp !==nextProps.ignoreProp){
            console.log('should component update?')
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        
        return null
    }

    render(){
        console.log('render')
        return(
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>decrement</button>
                <div className="counter">
                    Counter: {this.state.counter}
                </div>
                <p>{this.props.ignoreProp}</p>
            </div>
    )}
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('component did update')
        console.log('------------------')
    }

    componentWillUnmount(){
        console.log('component will unmount')

        console.log('------------------')
    }
}

export default Counter
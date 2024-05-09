import React, { Component } from 'react';

class Greetings extends Component {
    constructor(){
        super();
        this.state = {
            nameValue : '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        console.log(e);
        this.setState({nameValue: e.target.value})
    }
    render() { 
        return (
            <div className="container-fluid">
                <h1>Input </h1>
                <label htmlFor="text-content">
                    Enter your name:
                </label>
                <input 
                id = "text-content"
                type = "text"
                onChange={this.handleChange}
                value={this.state.nameValue}
                />
                <h1>Output </h1>
                <h1>Hello {this.state.nameValue}</h1>
            </div>
    );
    }
}
 
export default Greetings;
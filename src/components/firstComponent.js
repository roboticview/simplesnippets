import React, { Component } from 'react';

class First extends Component {
    constructor(){
        super();
        this.state = { 
            alertMessage : "This is a default message",
            alertClass : "alert-primary",
         } ;
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick(){
        const conTrue = "You've clicked the button";
        const conFalse = "This is a default message";
        const newMessage = this.state.alertMessage === conFalse ? conTrue : conFalse;
        const newAlertClass = this.state.alertClass==="alert-primary" ? "alert-danger" : "alert-primary";
        this.setState(
            {
                alertMessage: newMessage,
                alertClass : newAlertClass,
            }
        )
    }
    render() { 
        return (
            <div className="container-fluid">
                <div className={`alert ${this.state.alertClass}`} role="alert">
                    {this.state.alertMessage}    
                </div>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={this.handleButtonClick}
                >
                    Click me!
                </button>
            </div>
        );
    }
}
 
export default First;

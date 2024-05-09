import React, { Component } from 'react';

class  Payment extends Component {
    constructor(){
        super();
        this.state = {
            paymentStatus : false,
            alertClass : "alert-danger"
        };
        this.handleButtonClick = this.handleButtonClick.bind(this)
    }
    handleButtonClick() {
        this.setState({
            paymentStatus: true,
            alertClass : "alert-success"
        })
    }
        render() {
            const paid = this.state.paymentStatus===false ? "Please pay" : "Paid"
        return(
            <div className="container-fluid">
                <button onClick = {this.handleButtonClick} type="button" className="btn btn-primary">Payment</button>
                <div className={`alert ${this.state.alertClass}`} role="alert">
                    Payment status: {paid} 
                </div>
            </div>
        );
    }
}
export default Payment;
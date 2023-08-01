import React, { Component } from "react";
class Users01 extends Component {

    // // UPDATE State in Class Component
    // constructor() {
    //     super();
    //     this.state = {
    //         data: 1
    //     }
    // }

    // apple() {
    //     this.setState({ data: this.state.data + 1 })
    // }

    // render() {
    //     return (
    //         <div className="User01">
    //             <h1> Hello from Class Components. </h1>
    //             <h2>{this.state.data}</h2>
    //             <button onClick={() => this.apple()}>Update Data</button>
    //         </div>
    //     )
    // }



    // UPDATE Props in Class Components
    constructor() {
        super();
        this.state = {
            name: "Yash",
            email: "yash123@.com"
        }
    }



    render() {
        return (
            <div className="User01" style={{ margin: 20 }}>
                <h1>Props!</h1>
                Hello, {this.state.name} ! <br></br>
                Email : {this.state.email}  <br></br>
                <button onClick={() => this.setState({ name: "Baheti" })}>Update Name</button>
            </div>
        )
    }
}

export default Users01;
import React, { Component } from "react";



// // Props in Functional Components
// function Student(props) {
//     console.log(props.name);
//     return (
//         <div style={{ backgroundColor: "skyblue", margin: 10 }}>
//             {/* <h1>Student Component</h1> */}
//             <h2>Hello {props.name}</h2>
//             {/* <h3>Email : {props.email}</h3>
//             <h4>Address : {props.other.address}</h4> */}
//         </div>
//     )
// }

// export default Student;


class Student extends Component {

    // Props in Class Component


    render() {
        return (
            <div style={{ margin: 25 }}>
                Hello, {this.props.name} ! <br></br>
                Email : {this.props.email}
            </div>
        )
    }
}

export default Student;
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Users01 from './Users01';
import Users02 from './Users02';
import Student from './Student';
import Profile from './Profile';
import User03 from './Users03';
import Member from './Member';
import LCM from './LCM';
// alert("Hello")

function App() {

  // function Apple() {
  //   return (
  //     <div> Apple Component </div>
  //   )
  // }

  // let data = "Yash";
  // function updateData() {
  //   data = "Baheti";
  //   alert(data);
  // }

  // function apple() {
  //   alert("function called");
  // }

  // const [data, setData] = useState("Yash"); /* Update State in Functional Component */
  // function updateData() {
  //   setData("Baheti");
  // }

  // const [name, setName] = useState("Sushil"); /* Update Props in Functional Component */
  // function updateName() {
  //   setName("Baheti");
  // }


  // const [data, setData] = useState(null)     /* Get Input Box Value */
  // const [print, setPrint] = useState(false)

  // function getData(val) {
  //   console.log(val.target.value)
  //   setData(val.target.value)
  //   setPrint(false)
  // }



  // const [status, setStatus] = useState(true)   /* Hide and Show Element  */



  // const [name, setName] = useState("");   /* Handle forms in React   */
  // const [tnc, setTnc] = useState(false);
  // const [interest, setInterest] = useState("");
  // function getFormData(e) {
  //   console.log(name, interest, tnc)
  //   e.preventDefault()
  // }



  // function getData() {                /*  Pass function as Props!    */
  //   alert("Hello from app")
  // }






  return (
    <div className="App">
      {/* <h1>Hello World </h1> */}

      {/* <h1> State in React !!!</h1>
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button> */}

      {/* <button onClick={apple}>Click Me</button> */}

      {/* <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button> */}

      {/* <Users01 />
      <Users01 />
      <Users01 />
      <Apple />
      <Users02 /> */}

      {/* <Users01 />    // UPDATE State in Class Component */}

      {/* <h1> =====  Props in React :) </h1> */}
      {/* <Student name={"Yash"} email="yash123@gmail.com" other={{ address: 'Delhi', mobile: "1234567890" }} />
      <Student name={"Shera"} email="shera143@gmail.com" other={{ address: 'Mumbai', mobile: "0987654321" }} />
      <Student name={"Dhanu"} email="dhanu1709@gmail.com" other={{ address: 'Chennai', mobile: "6549732108" }} /> */}

      {/* <Student name={name} />
      <button onClick={() => { updateName() }}>Update Name</button> */}


      {/* <Student name="Yash" email="yash123@gmail.com" />   // Props in Class Component  
      <Student name={"Shera"} email="shera143@gmail.com" /> */}


      {/* <Users01 />   // UPDATE Props in Class Component */}


      {/* <h1>Get Input box value !!!</h1>
      {
        print ?
          <h2>{data}</h2>
          : null
      }
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print Data</button> */}



      {/* <h1>Hide and Show Element</h1>
      {
        status ? <h2>Hello</h2> : null
      }
      {/* <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> */}
      {/* <button onClick={() => setStatus(!status)}>Toggle</button>  */}



      {/* <h1>Handle Form in React!!!</h1>
      <form onSubmit={getFormData}>
        <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} />  <br></br><br></br>
        <select onChange={(e) => setInterest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>DC</option>
        </select>  <br></br><br></br>
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} /> <span>Accept Terms & Conditions</span>  <br></br><br></br>
        <button type="submit">Submit</button>
        <button>Clear</button>
      </form> */}



      {/* <h1>Conditional Rendering !</h1>
      <Profile /> */}


      {/* <h1>Pass Function as Props!</h1>
      <User03 data={getData} />
      <User03 data={getData} />
      <User03 data={getData} />
      <div style={{ float: 'right' }}>
        <Member data={getData} />
      </div> */}



      {/* <LCM /> */}






    </div>
  );
}

export default App;




{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
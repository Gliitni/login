import { useState,useEffect } from "react"
import { useHistory } from 'react-router-dom';
import Welcome from './Welcome.js';
import classes from './App.css';
// import Header from './Header';


// import {useHistory} from 'react-router-dom'

const App=()=> {
  const [username, setUsername] =useState("");
  const [password, setPassword]=useState("");
  const [state, setState] =useState();

  const history=useHistory();

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setState(foundUser);
    // history.push("/add");
    }
  }
    }, [])

  

  const login =(e)=>{
    e.preventDefault();
    if (state) {
      return <div>{state.username,state.password} is loggged in</div>;
    }
    const state={username,password};
    console.log("up",username,password)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username,password:password })
    };
    fetch('https://chtimesheet.azurewebsites.net/api/Auth/login', requestOptions)
      .then(response => response.json())
      .then(data => console.log('data',data))
          history.replace('/Welcome')
      //  history.push("/add")
    .catch((error) => {
        console.log(error);
    });
}
    
  
   
    // const result =  fetch("https://chtimesheet.azurewebsites.net/api/Auth/login",{
    //   method:'POST',
    //   headers: {'content-type': 'application/json'},
    //   body: JSON.stringify(
    //     { username: username,
    //       password:password 
    //   }),
    // });

    // const data = result.JSON()
  // const data =  result.JSON()
  // localStorage.setItem("user-info",result)
  // console.log("data",data)
  // }
  return (
<>
    
    
       {/* < Header /> */}
    
    <form className="row">
        <h1>SIGN IN </h1>
        {/* {(username,password) && (username,password)!="" && (username,password) !==undefined ? (
          "login" + (username,password) ):  */}
    <div className="row">
      <label>Email:</label><br/>
      <input text="email" placeholder="Enter email" onChange={(e)=>setUsername(e.target.value)}/><br/>
      <label >Password:</label><br/>
      <input text="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/><br/>
      
     
      <button className="button" onClick={login}>Login</button>
       
    </div>


    </form>
  
    
    </>
  );
}

export default App;

import React from "react"

import classes from './App.css';


const Login=(prop)=> {
  // console.log("prop",prop)
  // const login =()=>{
  // localStorage.getItem('user',log)
 

  return (
<>
  <form className="row">
  
        <h1>SIGN IN </h1>
        {/* {prop.name} */}
    <div className="row">
      <label>Email:</label><br/>
      <input text="email" placeholder="Enter email" onChange={(e)=>prop.setUsername(e.target.value)}/><br/>
      <label >Password:</label><br/>
      <input text="password" placeholder="Enter password" onChange={(e)=>prop.setPassword(e.target.value)}/><br/>
      
      <button className="button" onClick={prop.login}>Login</button>
       
    </div>     
    </form> 
   
    </>
  );
}

export default Login;

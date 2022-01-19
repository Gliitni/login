import { useState,useEffect } from "react"
import { useHistory } from 'react-router-dom';
import classes from './App.css';


const Login=()=> {
  const [username, setUsername] =useState("");
  const [password, setPassword]=useState("");
//   const [errorMessage, setErrorMessage] =useState();


  const history=useHistory();

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
   
    history.push("/add");
    
  }
    }, [])
   

  const login =(e)=>{
    e.preventDefault();
    
    
    console.log("up",username,password)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username,password:password })
    };
    fetch('https://chtimesheet.azurewebsites.net/api/Auth/login', requestOptions)
    //   .then(response => response.json())
    //   .then(data => console.log('data',data))
    
        
       
           
    //   .catch((err) => {
    //     alert(err.message);
    //   });

    .then((response) => {
        // setIsLoading(false);
        if (response.ok) {
          return response.json();
        } 
        else
         {
          return response.json().then((data) => 
          {
            const error = 'login failed';

            throw new Error(error);
          });
        }
      })
 // if (data!=="") {
        //   history.push('/Welcome')
        // } else 

      .then((data) => {
        console.log(data);
        history.push('/Welcome')
      })
      
      .catch((err) => {
        alert(err.message);
      });
    }
      
    
//     const result =  fetch("https://chtimesheet.azurewebsites.net/api/Auth/login",{
//       method:'POST',
//       headers: {'content-type': 'application/json'},
//       body: JSON.stringify(
//         { username: username,
//           password:password 
//       }),
//     });

//     const data = result.JSON()

//   localStorage.setItem("user-info",result)
//   console.log("data",data)
//   }
  return (
<>
    
    <form className="row">
        <h1>SIGN IN </h1>
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

export default Login;

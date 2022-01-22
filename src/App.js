import { Route,Switch,Redirect,useHistory } from 'react-router-dom';
import { useState } from 'react';
import Welcome from './Welcome.js';
import Login from './Login.js';
import Products from './Products';

import ProductDetails from './ProductDetails';

const App =()=> {
  
  const [username, setUsername] =useState("");
  const [password, setPassword]=useState("");
  const [log, setLog] =useState();
  console.log("log",log)

  const history=useHistory();

  const login =()=>{
  console.log("up",username,password)
  const requestOption = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( {username: username,password:password})
  };
  fetch('https://chtimesheet.azurewebsites.net/api/Auth/login', requestOption)
  .then((response) => {
  
      if (response.ok) {
        return  (response.json()); 
      }  else{
       return response.json().then((data) => 
        
        { const error = 'login failed';
           throw new Error(error);
        });
      }
    })

    .then((data) => {
      console.log("data",data);
      setLog(data);
      localStorage.setItem('user',data.email);
      localStorage.setItem('token',data.token);
      history.push('/Welcome')  
    })
    .catch((err) => {
      console.log("err",err)
      alert(err.message);
    });
  }

//   fetch('https://chtimesheet.azurewebsites.net/api/Auth/login', {
//     method: 'post',
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     },
//     body:JSON.stringify(username,password)
//   }).then(res =>{
//     return res.json(); //error here
//   }).then(data=>{
//     console.log(data);
//   }).catch((error) => {
//     console.log(error);
//  alert(error.message);
//   })
//   }
  return (
   
    <div>
      
      <main>
      <Switch>
      {/* {(log.token?log.username:'you are loged') */}
        {/* { log.token &&( */}
        
        <Route path='/' exact>
          <Redirect to='/Welcome' />
        </Route>
        
         {/* )} */}
           
         {/* {log.token!=""&&
         (  */}
      <Route path="/Login">
      <Login login={login} setUsername={setUsername} setPassword={setPassword}/>
    </Route>
        {/* )}  */}
         {/* {log.token&&( */}
      
        {/* { log.token=''&& */}
        {/* (  */}
      <Route path="/welcome">
        <Welcome />
      </Route>
 {/* )} */}
        {/* )} */}
      {/* {!log &&  ( */}
      <Route path="/products" exact>
        <Products />
      </Route>
       {/* )}  */}
      <Route path="/Products/:ProductId">
        <ProductDetails />
      </Route>
     
      </Switch>
      </main>
     
    </div>
  );
}

export default App;
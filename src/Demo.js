import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import MainHeader from "./MainHeader";
const UpdateData = () => {
  const [projectManagerId, setProjectManagerId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [users, setUsers] = useState([]);
  const [state, setState] = useState();
  console.log("state", state);

  console.log("prop", useParams());

  const { projectId } = useParams();
  console.log("pid", projectId);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(`https://chtimesheet.azurewebsites.net/api/Project/${projectId}`)
      .then((pr) => {
        console.log("pr", pr.data);
        setState(pr.data);
        setProjectManagerId(state.projectManagerId);
        setProjectName(projectName);
        setDescription(description);
        setUsers(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = () => {};
  const onChange = (e) => {
    console.log("e", e);
    const { name } = e.target;
    //state update.
  };

  return (
    <>
      <MainHeader />
      <form className="row">
        <h1>UPDATE FORM </h1>
        <div className="row">
          <label>ProjectManagerId:</label>
          <br />
          <input
            type="text"
            value={projectManagerId}
            onChange={setProjectManagerId(onChange)}
          />
          <br />
          <label>ProjectName:</label>
          <br />
          <input
            text="name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <br />
          <label>Description:</label>
          <br />
          <input
            text="name"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />

          <label>Users:</label>
          <br />
          <input
            text="name"
            value={users}
            onChange={(e) => setUsers(e.target.value)}
          />
          <br />

          <button
            className="button"
            type="button"
            onClick={handleUpdate(projectId)}
          >
            UPDATE
          </button>
          <br />
        </div>
      </form>
    </>
  );
};
export default UpdateData;

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 const onChange = (e) => {
    const { name, value } = e.target;
    //state update.
  };

const intial = {
    firstname: "",
    lastName: "",
  };

  const [test, setTest] = useState({
    isBusy: false,
    isDirty: false,
    data: intial,
  });

import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import Welcome from "./Welcome.js";
import Login from "./Login.js";
import Products from "./Products";

import ProductDetails from "./ProductDetails";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState();
  console.log("log", log);

  const history = useHistory();

  const login = () => {
    console.log("up", username, password);
    const requestOption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    fetch("https://chtimesheet.azurewebsites.net/api/Auth/login", requestOption)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((data) => {
            const error = "login failed";
            throw new Error(error);
          });
        }
      })

      .then((data) => {
        console.log("data", data);
        setLog(data);
        localStorage.setItem("user", data.email);
        localStorage.setItem("token", data.token);
        history.push("/Welcome");
      })
      .catch((err) => {
        console.log("err", err);
        alert(err.message);
      });
  };

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

          <Route path="/" exact>
            <Redirect to="/Welcome" />
          </Route>

          {/* )} */}

          {/* {log.token!=""&&
         (  */}
          <Route path="/Login">
            <Login
              login={login}
              setUsername={setUsername}
              setPassword={setPassword}
            />
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
};

export default App;






import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import Welcome from "./Welcome.js";
import Login from "./Login.js";
import Products from "./Products";

import ProductDetails from "./ProductDetails";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState();
  console.log("log", log);

  const history = useHistory();

  const handleLogin = () => {
    fetch("https://chtimesheet.azurewebsites.net/api/Auth/login", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            const error = "login failed";
            throw new Error(error);
          });
        }
      })

      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

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
          <Route path="/Login">
            <Login
              login={handleLogin}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          </Route>
          {/* )}  */}
          {/* {log.token&&( */}

          {/* { log.token=''&& */}
          {/* (  */}
          {/* <Route path="/welcome">
            <Welcome />
          </Route> */}
          {/* )} */}
          {/* )} */}
          {/* {!log &&  ( */}
          {/* <Route path="/products" exact>
            <Products />
          </Route> */}
          {/* )}  */}
          {/* <Route path="/Products/:ProductId">
            <ProductDetails />
          </Route> */}
        </Switch>
      </main>
    </div>
  );
};

export default App;


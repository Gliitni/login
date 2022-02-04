import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState();
  useEffect(() => {
    const login = localStorage.getItem("user");
    if (login) {
      const User = login;
      setLog(User);
    }
  }, []);

  const history = useHistory();
  useEffect(() => {
    axios
      .get("https://chtimesheet.azurewebsites.net/api/Project")
      .then((projects) => {
        // console.log("projects", projects.data);
        // editFunc(projects.data);
        // console.log("editf", editFunc);
        // setData(projects.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleLogin = () => {
    axios
      .post("https://chtimesheet.azurewebsites.net/api/Auth/login", {
        username: username,
        password: password,
      })

      .then((res) => {
        // console.log("ress", res);

        if (res.data) {
          localStorage.setItem("user", JSON.stringify(res.data));
          setLog(res);
          history.push("/Home");
        } else {
          const error = "login failed";
          throw new Error(error);
        }
      })

      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };
  return (
    <>
      <form className="row">
        <h1>SIGN IN </h1>
        {/* {prop.name} */}
        <div className="row">
          <label>Email:</label>
          <br />
          <input
            text="email"
            placeholder="Enter email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            text="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button className="button" type="button" onClick={handleLogin}>
            Login
          </button>
          <br />
        </div>
      </form>
    </>
  );
};

export default Login;

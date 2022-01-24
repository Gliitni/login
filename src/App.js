import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Welcome from "./Welcome.js";
import Login from "./Login.js";
import Products from "./Products";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [log, setLog] = useState();

  const logg = () => ({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  console.log("log-ll", log);

  useEffect(() => {
    const login = localStorage.getItem("user");
    if (login) {
      const User = JSON.parse(login);
      setLog(User);
    }
  }, []);

  const history = useHistory();
  const handleLogout = () => {
    setLog({});
    setUsername("");
    setPassword("");
    localStorage.clear();
    history.push("/Login");
  };

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

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setLog(data.user);
        history.push("/Home");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <main>
        <Switch>
          <Route path="/Login" exact>
            <Redirect to="/Login" />
            <Login
              login={handleLogin}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          </Route>
          {logg && (
            <Route path="/Home" exact>
              <Home />
            </Route>
          )}

          {logg && (
            <Route path="/Welcome" exact>
              <Redirect to="/Welcome" />
              <Welcome />
            </Route>
          )}

          {logg && (
            <Route path="/Products" exact>
              <Redirect to="/Products" />
              <Products />
            </Route>
          )}

          {logg && (
            <Route path="/Products/:ProductId">
              <ProductDetails />
            </Route>
          )}
        </Switch>
      </main>
    </div>
  );
};

export default App;

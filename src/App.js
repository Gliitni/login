import { Route, Switch, Redirect } from "react-router-dom";
import React from "react";
import Welcome from "./Welcome.js";
import Login from "./Login.js";
import Products from "./Products";
import Home from "./Home";
import ProductDetails from "./ProductDetails";

import Form from "./Form";
import FormList from "./FormList.js";
import UpdateData from "./UpdateData";

const App = () => {
  const logg = () => ({
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  // const handleLogout = () => {
  //   setLog({});
  //   setUsername("");
  //   setPassword("");
  //   localStorage.clear();
  //   history.push("/Login");
  // };

  return (
    <div>
      {/* <button type="button" onClick={handleLogout}>
        Logout
      </button> */}

      <main>
        <Switch>
          <Route path="/Login" component={Login}>
            <Redirect to="/Login" />
            <Login />
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
            <Route path="/Form" component={Form}>
              <Form />
            </Route>
          )}
          {logg && (
            <Route path="/UpdateData/:projectId" component={UpdateData} />
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
          {logg && (
            <Route path="/FormList" component={FormList}>
              <FormList />
            </Route>
          )}
        </Switch>
      </main>
    </div>
  );
};

export default App;

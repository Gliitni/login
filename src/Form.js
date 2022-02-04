import React, { useState, useEffect } from "react";
import MainHeader from "./MainHeader";
import classes from "./App.css";
import axios from "axios";

const Form = () => {
  const [mid, setMid] = useState("");
  const [projectname, setProjectname] = useState("");
  const [description, setDescription] = useState("");
  const [pid, setPid] = useState("");
  const [users, setUsers] = useState([]);
  const [fetchUsers, setFetchUsers] = useState();
  // console.log("props", prop);
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
  const clickHandler = () => {
    axios

      .post("https://chtimesheet.azurewebsites.net/api/Project", {
        projectId: pid,
        projectManagerId: mid,
        projectName: projectname,
        description: description,

        users: [users],
      })
      .then((response) => {
        // console.log("response", response);
        setFetchUsers(response.data);
      })

      .catch((error) => {
        // console.log(error);
      })
      .then(() => {});
  };
  return (
    <>
      <MainHeader />
      <form>
        <h1>FORM </h1>
        <div className="row">
          <label>ProjectManagerId:</label>
          <br />
          <input
            text="id"
            placeholder="ManagerId"
            onChange={(e) => setPid(e.target.value)}
          />
          <br />
          <label>ProjectManagerId:</label>
          <br />
          <input
            text="id"
            placeholder="ManagerId"
            onChange={(e) => setMid(e.target.value)}
          />
          <br />
          <label>ProjectName:</label>
          <br />
          <input
            text="name"
            placeholder="Project Name"
            onChange={(e) => setProjectname(e.target.value)}
          />
          <br />
          <label>Description:</label>
          <br />
          <input
            text="name"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />

          <label>Users:</label>
          <br />
          <input
            text="name"
            placeholder="Users"
            onChange={(e) => setUsers(e.target.value)}
          />
          <br />

          <button className="button" type="button" onClick={clickHandler}>
            SAVE
          </button>
          <br />
        </div>
      </form>
    </>
  );
};
export default Form;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MainHeader from "./MainHeader";
const UpdateData = () => {
  const [state, setState] = useState({
    // projectId: "",
    projectManagerId: "",
    projectName: "",
    description: "",
    users: [],
  });
  // console.log("state", state);
  const { projectManagerId, projectName, description, users } = state;
  console.log("state", state);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [e.target.name]: e.target.value });
    console.log("e", state);
    // console.log("name", name);
    // console.log("value", value);
    // const { name, value } = e.target;
    //state update.
    //  };
  };
  console.log("prop", useParams());

  const { projectId } = useParams();
  // console.log("pid", projectId);
  useEffect(() => {
    axios
      .get(`https://chtimesheet.azurewebsites.net/api/Project/${projectId}`)
      .then((pr) => {
        console.log("pr", pr.data);
        setState(pr.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleUpdate = (projectId) => {
    // console.log("test", projectId);
    // console.log("before", state);
    axios
      .put(`https://chtimesheet.azurewebsites.net/api/Project/${projectId}`, {
        // projectId: projectId,
        projectManagerId: projectManagerId,
        projectName: projectName,
        description: description,
        users: [users],
      })

      .then((editres) => {
        console.log("editres", editres.data);
        setState(editres.data);
      });
  };

  return (
    <>
      <MainHeader />

      <form>
        <h1>UPDATE FORM </h1>
        <div className="row">
          <label>ProjectManagerId:</label>
          <br />
          <input
            type="name"
            placeholder="enter projectManagerId"
            name="projectManagerId"
            value={projectManagerId}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label>ProjectName:</label>
          <br />
          <input
            text="name"
            placeholder="enter projectName"
            name="projectName"
            value={projectName}
            onChange={(e) => onInputChange(e)}
          />
          <br />
          <label>Description:</label>
          <br />
          <input
            text="name"
            placeholder="enter description"
            name="description"
            value={description}
            onChange={(e) => onInputChange(e)}
          />
          <br />

          <label>Users:</label>
          <br />
          <input
            text="name"
            placeholder="enter users"
            name="users"
            value={users}
            onChange={(e) => onInputChange(e)}
          />
          <br />

          <button
            className="button"
            type="button"
            onClick={(e) => handleUpdate(projectId)}
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

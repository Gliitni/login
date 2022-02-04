import React, { useState, useEffect } from "react";
import MainHeader from "./MainHeader";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";
import UpdateData from "./UpdateData";
const FormList = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://chtimesheet.azurewebsites.net/api/Project")
      .then((pr) => {
        // console.log("pr", pr.data);

        setData(pr.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDelete = (projectId) => {
    console.log("id", projectId);

    if (window.confirm("Are you sure?")) {
      axios
        .delete(
          " https://chtimesheet.azurewebsites.net/api/Project/" + projectId
        )
        .then((rsp) => {
          // console.log("rsp", rsp.data);
          // setData(rsp.data);
          editFunc(data);
        });
    }
  };
  const editFunc = () => {
    axios
      .get("https://chtimesheet.azurewebsites.net/api/Project")
      .then((proj) => {
        // console.log("proj", proj.data);
        setData(proj.data);
      });
  };

  return (
    <div>
      <MainHeader />
      <h1>Project List</h1>
      <table>
        <thead>
          <tr>
            {/* <th>projectId</th> */}
            <th>projectManagerId</th>
            <th>projectName</th>
            <th>description</th>
            {/* <th>parentId</th> */}
            <th>users</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => {
              // console.log("dataa", data);
              return (
                <tr>
                  {/* <td> {item.projectId}</td> */}
                  <td>{item.projectManagerId}</td>
                  <td>{item.projectName}</td>
                  <td>{item.description}</td>
                  {/* <td>{prop.parentId}</td> */}
                  <td>{item.users}</td>

                  <td>
                    <button>
                      <Link to={`updateData/${item.projectId}`}>Edit</Link>
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDelete(item.projectId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default FormList;

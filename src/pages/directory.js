import React, { useEffect, useState, useContext, Component } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";
// import DeveloperContext from "./utils/DeveloperContext";

// function Dir() {
//   const = useState({
//     user: "",
//     users: [],
//     userIndex: 0,
//   });

//   // When the component mounts, a call will be made to get random users.
//   useEffect(() => {
//     loadUsers();
//   }, []);

//   function nextUser(userIndex) {
//     // Ensure that the user index stays within our range of users
//     if (userIndex >= users.length) {
//       userIndex = 0;
//     }
//     setUser(users[userIndex]);
//     setUserIndex(userIndex);
//   }

//   function previousUser(userIndex) {
//     // Ensure that the user index stays within our range of users
//     if (userIndex < 0) {
//       userIndex = users.length - 1;
//     }
//     setUser(users[userIndex]);
//     setUserIndex(userIndex);
//   }

//   function handleBtnClick(event) {
//     // Get the title of the clicked button
//     const btnName = event.target.getAttribute("data-value");
//     if (btnName === "next") {
//       const newUserIndex = userIndex + 1;
//       nextUser(newUserIndex);
//     } else {
//       const newUserIndex = userIndex - 1;
//       previousUser(newUserIndex);
//     }
//   }

function loadEmployees() {
      API.getEmployees().then((users) => {
        setUsers(users);
        setUser(users[0]);
      }
      .catch((err) => console.log(err)))
};
function Directory() {
  return (
    <div>
      {/* <DeveloperContext.Provider value={developerState}> */}
      <h1 className="text-center">Welcome to LinkedUp</h1>
      <h3 className="text-center">Click on the arrows to browse users</h3>
      <Row>
        <CardContainer />
      </Row>
      {/* </DeveloperContext.Provider>  handleBtnClick={handleBtnClick}*/}
    </div>
  );
}
// }

export default Directory;

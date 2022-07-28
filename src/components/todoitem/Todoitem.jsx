import React from 'react';
// import React, { useState } from "react";
// import PropTypes from "prop-types";

// TaskItem.propTypes = {
//     taskName: PropTypes.string,
//     taskAuthor: PropTypes.string,
//     taskStatus: PropTypes.string,
//     taskDescription: PropTypes.string,
//   };
  
//   TaskItem.defaultProps = {
//     taskName: "Task name",
//     taskAuthor: "Task author",
//     taskStatus: "New",
//     taskDescription: "Task description",
//   };
function TodoItem() {
    // const { taskName, taskAuthor, taskStatus, taskDescription } = props;
    // const [status, setStatus] = useState(taskStatus);
    // const [btnStatus, setBtnStatus] = useState("Start");
    // const [statusColor, setColor] = useState("green");
    // function changeValueFunction() {
    //     if (status === "New") {
    //       setStatus("Doing");
    //       setBtnStatus("Done");
    //       setColor("red");
    //     } else if (status === "Doing") {
    //       setStatus("Done");
    //       setBtnStatus("refresh");
    //       setColor("blue");
    //     } else if (status === "Done") {
    //       setStatus("New");
    //       setBtnStatus("Start");
    //       setColor("green");
    //     }
    // }
    return (
        <div className= "containerItem">
            <p className= "containerItem__title">Title: Taks 1</p>
            <p className= "containerItem__creator">Creator: Tung Le</p>
            <p className= "containerItem__status">Status: New</p>
            <hr className= "containerItem__lineBreak"/>
            <p className= "containerItem__description">Description: This is a task</p>
            <button
            className="container__button ">Start</button>
        </div>
    );

};

export default TodoItem;
import TaskItem from "../TaskItem/TaskItem";
import "./style.css"
import React from 'react';
TaskList.propTypes = {

};
function TaskList(props){
    return (
        <div className="main">
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
            <TaskItem taskName="Task 1" taskAuthor="Tung Le" taskDescription="This is a task"/>
        </div>
    );
}
export default TaskList;;
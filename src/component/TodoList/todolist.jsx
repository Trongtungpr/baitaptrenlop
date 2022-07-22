import React from 'react';
import PropTypes from 'prop-types'


TaskList.propTypes = {
};

function TaskList() {
    return (
        <div>
            <div className="task-list">
                <TaskItem taskname="task-1" creator="Tung" version="New" desc='Wake up early to meet your friends'/>
                <TaskItem creator="Duc" taskname="task-2" desc="Complete your homework as soon as possible"/>
                <TaskItem version="New" taskname="task-3" creator="Le" />
                <TaskItem taskname="task-4" creator="Trieu" version="New" desc="You have an appoinment with customers."/>
                <TaskItem creator="V" taskname="task-5" desc="You will join in Thao's wedding at tomorrow."/>
            </div>
        </div>
    );
}

export default TaskList;
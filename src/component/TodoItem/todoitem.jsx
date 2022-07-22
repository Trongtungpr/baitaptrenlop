import PropTypes from 'prop-types';
import { useState } from 'react';
import './style.css'

TaskItem.propTypes = {
    taskName: PropTypes.string,
    creator: PropTypes.string,
    version: PropTypes.string,
    desscription: PropTypes.string,
}
TaskItem.defaultProps = {
    taskname: "Task name",
    creator: "Task author",
    version: "Task status",
    desscription: "Task desscription",
}
function TaskItem(props) {
    const {taskname, creator, version, desscription} = props;
    const [status, setStatus] = useState("Start");
    return(
        <div>
            <div className='task-item'>
                 <p>Title: <span>{taskname}</span></p>
                 <p>Creator:<span>{creator}</span></p>   
                 <p>Status:<span>{version}</span></p>   
                 <p>Description:<span>{desscription}</span></p>   
                 <p>{status}</p>
                 <button onClick = {() => setStatus("Done")}>Done</button>
                 <button onClick={() => setStatus("Doing")}>Doing</button>
                 <button>Cancle</button>
            </div>
        </div>
    )
}
export default TaskItem;
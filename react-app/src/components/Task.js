
import { FaTimes } from 'react-icons/fa'

const Task = ({task,onDelete}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>{task.text} <FaTimes onClick={()=>onDelete(task.id)} styles={{ color: 'red', cursor: 'pointer' }} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task

import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div 
      className={`task ${task.reminder ? 'reminder':''}`}  // conditional styling
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes 
          style={{color: 'red', cursor: 'pointer'}} 
          onClick={ () => {onDelete(task.id)} }
        />
      </h3>
      <p>{task.time}</p>
    </div>
  )
}

export default Task

import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateTask } from "../store/task"

export const EditTodo = ({task, editTaskId}) => {

    const [UpdatedTask, setUpdatedTask] = useState(task)
    const dispatch = useDispatch()
  
    const handleChange = (e) => {
        setUpdatedTask(e.target.value);
    }
  
    const handleClick = (event) => {
          event.preventDefault();
          dispatch(updateTask({id: editTaskId, updatedTask: UpdatedTask}))
    }

  return (
    <form onSubmit={handleClick} className='border-2 w-[90%]'>
    <div className='flex border-2 mt-8'>
    <input type='text' value={UpdatedTask} onChange={handleChange} className='border-2' />
    <button className=''>Update task</button>
    </div>
</form>
  )
}

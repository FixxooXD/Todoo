import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask, fetchTasks } from "../store/task"

const AddTask = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
  
    const handleChange = (e) => {
       setTask(e.target.value);
    }
  
    const handleClick = (event) => {
      event.preventDefault();
          dispatch(addTask({task}))
          dispatch(fetchTasks())
          setTask("")
    }
  
      return (
        <form onSubmit={handleClick} className='border-2 w-[90%]'>
            <div className='flex border-2 mt-8'>
            <input type='text' value={task} onChange={handleChange} className='border-2' />
            <button className=''>Add task</button>
            </div>
        </form>
      )
}

export default AddTask
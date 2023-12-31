import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { completeTask, editTask, removeTask, todoSlice } from '../store/task'
import { EditTodo } from './EditTodo'


export const Todos = () => {
    
    // const taskSlice = useSelector(state => state.task)
    const todos = useSelector(state => state.task.users.userData.userTodos);
    // const userSlice = useSelector(state => state.user.users);
    console.log(todos)
    // const Loading =taskSlice.isLoading;
    // console.log(Loading)
  
    const dispatch = useDispatch()

    const handleRemoveTask = (id) => {
      dispatch(removeTask({id}))
    }
  
    const handleCompleteTask = (id) => {
      dispatch(completeTask({id}))
    }

    const handleEditTask = (id) => {
      dispatch(editTask({id}))
    }

  return (
    <>   
    <ul className='w-[90%]'>
     {
     todos.map((task) => task.isEditing === true ? <EditTodo key={task.id} task={task.task} editTaskId={task.id} /> : (
     <li className='border-2 w-full flex gap-4 justify-center' key={task.id}><span onClick={() => handleCompleteTask(task.id)}><FontAwesomeIcon icon={faCheck} /></span>{task.task}<span onClick={() => handleEditTask(task.id)} ><FontAwesomeIcon icon={faPenToSquare} /></span><span onClick={() => handleRemoveTask(task.id)}><FontAwesomeIcon icon={faTrash}/></span></li>))
    }
    </ul>
    </>
  )
}

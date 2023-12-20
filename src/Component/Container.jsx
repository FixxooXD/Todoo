import React from 'react'
import { useSelector } from 'react-redux'
import AddTask from './AddTask'
import { Todos } from './Todos'

export const Container = () => {

  const taskSlice = useSelector(state => state.task.todo);

  console.log(taskSlice);

  return (
    <div className='flex flex-col items-center w-full border'>
     <AddTask />
     <Todos />
    </div>
  )
}

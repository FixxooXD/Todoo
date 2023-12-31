import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export const Index = () => {
 
  const taskUsers = useSelector((state) => state);
  console.log(taskUsers)

  return (
    <div>
    <Link to='/auth'>Get Signup</Link>
    </div>
  )
}

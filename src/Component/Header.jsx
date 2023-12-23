import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='flex justify-between px-5 p-2 border-b-2'>
        MyTodos
        <div>
        <Link to='/auth'>signup</Link>
        </div>
    </div>
    </>
  )
}

export default Header
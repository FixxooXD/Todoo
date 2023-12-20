import { useState } from 'react'
import { Container } from './Component/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center border-2 h-screen'>
     <Container />
     </div>
    </>
  )
}

export default App

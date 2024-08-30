import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='flex flex-col w-full items-center'>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default App
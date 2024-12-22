import React from 'react'
import Nav from './Nav'
import Firstswiper from './Firstswiper'

function Dashboard() {
  return (
    <div className="h-screen w-screen bg-slate-950 flex items-center flex-col overflow-x-hidden">
        <Nav />
        <Firstswiper />
    </div>
  )
}

export default Dashboard
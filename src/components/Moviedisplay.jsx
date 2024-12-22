import React from 'react'
import Moiveline from '../page/Movies'

function Moviedisplay() {
  return (
    <div className="h-full w-full overflow-hidden flex flex-col items-center justify-evenly gap-10">
        <Moiveline />
        <Moiveline />
        <Moiveline />
    </div>
  )
}

export default Moviedisplay
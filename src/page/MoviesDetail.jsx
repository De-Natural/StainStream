import React from 'react'
import Merging from '../components/Merging'
import Moviedisplay from '../components/Moviedisplay'
import Plaza from '../components/Plaza'
import Select from '../components/Select'

export default function MoviesDetail() {
  return (
    <div className=''>
        <Merging />
        <Moviedisplay />
        <Plaza />
        <Select />
    </div>
  )
}

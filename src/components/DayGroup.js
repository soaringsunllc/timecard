import React from 'react'

import TimeField from './TimeField'
import '../styles/DayGroup.css'

function DayGroup ({ inOutNext }) {
  return (
    <div className='DayGroup'>
      <TimeField inOut={inOutNext} />
    </div>
  )
}

export default DayGroup

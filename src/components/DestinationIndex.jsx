import React from 'react'
import AddDestination from './AddDestination'
import DestinationList from './DestinationList'

function DestinationIndex() {
  return (
    <div className='text-black-50'>
        <h1 className='text-success text-center'> travelOpedia</h1>
        <AddDestination/>
        <DestinationList/>
    </div>
  )
}

export default DestinationIndex
import React from 'react'

const Contact=(props) =>{
  return (
    <div>
         <button className='btn btn-secondary form-control'>
          
          {props.Contact.name}
         </button>
    </div>
  )
}
export default Contact
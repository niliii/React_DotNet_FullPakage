import React from 'react'
import { useParams } from 'react-router-dom'
function ProductDeteails() {
  const {productId}=useParams()
  return (
    <div>ProductDeteails
      <p>ID:{productId}</p>
    </div>
    
  )
}

export default ProductDeteails
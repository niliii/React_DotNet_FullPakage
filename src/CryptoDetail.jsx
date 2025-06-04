import React from 'react'
import { useParams } from "react-router-dom";


function CryptoDetail() {
  const { cryptoSymbol } = useParams();
  return (
     <div>
      <h4>CreatProudact</h4>
      <p>symbol :{cryptoSymbol}</p>
    </div>
  )
}

export default CryptoDetail
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'



export default function Counter() {
 const [count,setcount]=useState(0);

        const handleAttact = () => {
            alert("handle error");
            this.setstate({count:this.state.count+1})
        };
        const defendAttact = () => {
            alert("defend error");
        }

        return (
            <div className='row text-center'>
                <h1>Counter:{Counter=10}</h1>
                <button onClick={handleAttact} style={{ width: "200px" }}>+1</button>
                <button onClick={defendAttact} style={{ width: "200px" }}>-1</button>
            </div>
        );
    }



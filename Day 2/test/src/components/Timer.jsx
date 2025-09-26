import React from 'react'
import { useState, useEffect } from 'react'

export default function Timer() {
    const [seconds, setSeconds] = useState(0)

    useEffect(()=>{
        const timer = setInterval(()=>{setSeconds((s)=>s + 1)}, 1000)

        return () => clearInterval(timer) 
    },[]);

  return (
    <div>
      <h1>Useeffect Example</h1>
      <p>Timer {seconds}</p>
    </div>
  )
}

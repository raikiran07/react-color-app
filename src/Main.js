
import React from 'react'

const Main = ({color,visible}) => {


 
    
  return (
    
    <main className="main-box"
    style={{backgroundColor:color}}
    >
        <p style={{color:visible ? "white" : "black"}}>{color ? color : "Empty Value"}</p>
    </main>
  )
}

export default Main
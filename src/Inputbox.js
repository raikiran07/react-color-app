
import React from 'react'

import 'react-toastify/dist/ReactToastify.min.css';
import {ToastContainer,  toast } from 'react-toastify';


const Inputbox = ({color,setColor,visible,setVisible}) => {

  // function checkColor(value){
  //   value = value ? value : "Empty value";
  //   setColor(value);
  // }

  function checkValue(e){
    e.preventDefault();
    toast.error("Wow so easy !");
    console.log(toast)
    console.log("hello")
    setVisible(!visible);
  }

  
  return (
    <form>
        <input
        onSubmit = {(e)=>e.preventDefault()}
        autoFocus
        type="text"
        placeholder="enter color..."
        className="inputbox"
        onChange={(e)=>setColor(e.target.value)}
         />
         <br></br>
         <button
         className="btn"
         onClick = {checkValue}
         >Visible</button>
         <ToastContainer />
    </form>
  )
}

export default Inputbox
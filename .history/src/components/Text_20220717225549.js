import React,{useState} from "react";





export default function Text(prop) {
    
    const [text,setText] = useState("")
    return (
   
    <>
    <div className='text'>
        {prop.text}
    </div>
    </>
    )
  }







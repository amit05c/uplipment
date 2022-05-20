import React,{useState} from 'react'

const Child1 = (props) => {
//   const [childValue,setChildValue]= useState("")
  return (
    <div>
       child: <input type="text" onChange={(e)=>props.setVal(e.target.value)} />
        Child1: {props.childinfo}</div>
  )
}

export default Child1
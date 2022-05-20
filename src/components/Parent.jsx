import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
    let information= "xxxxxxxxxx"
    const [value,setValue]= useState('')
    const [childVal, setChildval]= useState('')
    const updateChild= (update)=>{
        setChildval(update)
    }
  return (
    <div>
        <input type="text" onChange={(e)=> setValue(e.target.value)} />
        Parent: parentval-{value} and child-{childVal}
        <Child1 info={value} childinfo={childVal} setVal={setChildval}/>
        <Child2/>
    </div>
  )
}

export default Parent
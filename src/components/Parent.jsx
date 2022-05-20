import React,{useState} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
   
    const [info,setInfo] = useState('')
    
    
  return (
    <div>
        
        Parent: {}
        <Child1 info={info} setInfo={setInfo}/>
       A
       B  
       C 
        <Child2 info={info}/>
    </div>
  )
}

export default Parent
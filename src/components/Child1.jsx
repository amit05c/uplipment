import React,{useState} from 'react'
// import Child2 from './Child2'

const Child1 = (props) => {
//   const [value,setValue]= useState(props.info)
  const handleChange= (e)=>{
      let newVal=e.target.value
      props.setInfo(newVal)
  }
  return (
    <div>
       child-input: <input type="text" onChange={handleChange} />
        Child1: {props.info}
        
        </div>
       
  )
}

export default Child1
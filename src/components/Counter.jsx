import React, { useState, useEffect } from 'react'

export default function Counter(onChangeState)  {
  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');

 

  // First iteration
  const handleIncrease =(num)=>{
      setCount(count => count + num);
  }

  // Second and Fourth iteration
  useEffect(() => {
    setCount(count => count =      
      Math.floor(Math.random() * 10)      
    )
  },[]);

  // Third iteration

  useEffect(() => {
      if(count < 0){
        setDynamicClass(dynamicClass=>dynamicClass = "red");      
      }else if (count >-1 && count < 6 ){
        setDynamicClass(dynamicClass=>dynamicClass = "orange");      
      }else {
        setDynamicClass(dynamicClass=>dynamicClass = "green");      
      }
  },[count])
  useEffect(() => {
    return(()=>{

       setCount(count => count =0)
       setDynamicClass(dynamicClass=>dynamicClass = "text");
       console.log('All clean here. Count:', count, 'Class:', dynamicClass);
    })
      
    
  },[onChangeState])

 
  return (
    <div>
      <p>Counter: <span style={{fontWeight:"bold"}} className={dynamicClass}>{count}</span></p>
      <button onClick={()=>handleIncrease(1)}> Increase</button>
      <button onClick={()=>handleIncrease(-1)}>- Decrease</button>    
    </div>
  )
}

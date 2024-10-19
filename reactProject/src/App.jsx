import React, { useState } from 'react'

export default function App() {
  const [val,setVal] = useState(0);
    const add = () => {
      if(val === 20)
        setVal(20);
      else{
      setVal(val => val + 1); // here the val increases by 1 :
      console.log(val);  
      setVal(val =>val + 1);
      console.log(val);

      setVal(val =>val + 1);
      setVal(val =>val + 1);
      console.log(val);


      }
    }

    const remove = () => {
      if(val === 0)
        setVal(0);
      else
      setVal(val-1);
    }
  return (
    <div className='bg-zinc-900 h-screen w-full text-white'>

      <div className=' '>
    
      <h1 className='flex justify-center p-5 m-2'>React With Tilak</h1>
      <h2 className='flex justify-center m-5 p-5'>Counter Value = {val} </h2>
      <button  className='flex justify-center m-3 p-2 text-white bg-orange-700 rounded-md'  onClick={add}>Add value</button>
      <button  className='flex justify-center m-3 p-2 text-white bg-orange-900 rounded-md' onClick={remove}>remove Value</button>
    
      </div>
    </div>
  )
}
 
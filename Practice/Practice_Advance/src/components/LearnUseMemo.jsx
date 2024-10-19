import React, { useMemo, useState } from 'react'

export default function LearnUseMemo() {
 
    const [count,setCount] = useState(0)

    const countClicked = () => {
        console.log("count function called")
        setCount(count+1);
    }

    const[random,setRandom] = useState(null);

    const generateRandom = () => {
        console.log("random called")
        const newrandom = Math.floor(Math.random() * 100 ) ;
        setRandom(newrandom);
    }

    // const isCountTen = () => {
    //     console.log("iscount function called")
    //     if(count === 10){
    //         return "yes"
    //     }
    //     else
    //     return "no"
    // }

    const isCountTen = useMemo(() => {

        console.log("Memo called")
        if(count === 10){
            return "yes"
        }
        else
        return "no"
    }, [count])
  return (
    <>
      {/* <h1>The count is -- {count} -- is count ten {isCountTen()} </h1> */}
      <h1>The count is -- {count} -- is count ten {isCountTen} </h1>
      <button onClick={countClicked}>add count</button>

      <h1>The random number is --{random} </h1>
      <button onClick={generateRandom}>generate random</button>
    </>
  )
}

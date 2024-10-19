import React, { useState } from 'react'

export default function useCount() {
    const [count,setCount] = useState(0)

    const handelCount = () => {
        setCount(count+1);
    }
  return {
    count,handelCount

  }
}

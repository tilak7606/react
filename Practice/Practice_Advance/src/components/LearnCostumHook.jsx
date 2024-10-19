import React from 'react'

import useCount from '../hooks/useCount'

export default function LearnCostumHook() {

    const {count, handelCount} = useCount()
  return (
    <>
      <h1>The count is -- {count} </h1>
      <button onClick={handelCount}>Increase</button>

      <useCount/>
    </>
  )
}

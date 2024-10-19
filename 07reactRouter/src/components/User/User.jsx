import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams();
  return (
    <div className='flex text-center justify-center bg-red-300 h-8 p-1.5 '>
        User : {userid}
    </div>
  )
}

import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams();
  return (
    <div className='flex self-center'>
        User:{userid}
    </div>
  )
}

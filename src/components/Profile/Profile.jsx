import React from 'react'
import { useContext } from 'react'
import userContext from '../../context/context'
export default function Profile() {
    const user= useContext(userContext);
  return (
    <div>
        <h1>Profile</h1>
        <h1>Welcome {user}</h1>
    </div>
  )
}

import React from 'react'
import userContext from '../../context/context'
export default function Contact() {
  return (
    <userContext.Consumer>
        {
            (user)=>(
                <div>
                    <h1>Contact</h1>
                    <h1>Welcome {user}</h1>
                </div>
            )
        }
    </userContext.Consumer>
  )
}

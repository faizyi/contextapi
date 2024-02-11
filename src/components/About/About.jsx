import React from 'react'
import userContext from '../../context/context'

export default function About() {
  return (
    <userContext.Consumer>
        {
            (user)=>(
                <div>
                    <h1>About</h1>
                    <h1>Welcome {user}</h1>
                </div>
            )
        }
    </userContext.Consumer>
  )
}

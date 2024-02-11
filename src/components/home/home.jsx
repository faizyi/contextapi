import React from 'react'
import userContext from '../../context/context'
export default function Home() {

  return (
    <div>
        <h1>Home</h1>

        <userContext.Consumer>
            {
                (value)=>(
                    <div>
                        <h1>Welcome {value}</h1>
                    </div>
                )
            }
        </userContext.Consumer>
    </div>
  )
}

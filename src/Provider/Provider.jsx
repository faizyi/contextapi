import React, { useState } from 'react'
import userContext from '../context/context'
export default function Provider({children}) {
    const [name,setName] = useState('Facebook')
    useState(()=>{
        setName('Faiz')
    },[])
  return (

        <userContext.Provider value={name}>
            {children}
        </userContext.Provider>

  )
}


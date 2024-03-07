import React, { createContext, useState } from 'react'
//import Z from './Z';
import Y from './Y';

  export const UserContext = createContext();

export default function X() {
    const [data,setData] = useState('priyal sen')
  return (
    <UserContext.Provider >
      <h1>{data}</h1>
      <Y/>
    </UserContext.Provider>
  )
}

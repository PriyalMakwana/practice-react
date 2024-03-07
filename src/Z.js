import React, { useContext } from 'react'
import { UserContext } from './X'

export default function Z() {
    const user = useContext(UserContext)
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

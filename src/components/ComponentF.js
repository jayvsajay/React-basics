import React, { useContext } from 'react'
import { UserContext } from '../App1'

function ComponentF() {

    const user=useContext(UserContext)
  return (
    <div>
        <h1>{user.Phone} {user.name}</h1>

    </div>
  )
}

export default ComponentF
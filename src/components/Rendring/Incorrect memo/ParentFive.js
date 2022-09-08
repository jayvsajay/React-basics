import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFive = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('AJay')

  const person = {
    fname: 'Bruce',
    lname: 'Wayne',
  }

  const memoizedPerson = useMemo(() => person, [])

  const handleClick = () => {}

  const memoizedHandleClick = useCallback(handleClick, [])

  console.log('ParentFour Render')
  return (
    <div>
      <button onClick={() => setName('Codevolution')}>Change name</button>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
    </div>
  )
}
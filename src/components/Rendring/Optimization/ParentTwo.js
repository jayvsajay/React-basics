import React, { useState } from 'react'
import { ChildTwo, MemoizedChildTwo } from './ChildTwo'

export const ParentTwo = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Ajay')

  console.log('ParentTwo Render')
  return (
    <div>
      <button onClick={() => setName('VInay')}>Change name</button>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      {/* <ChildTwo name={name} /> */}
      <MemoizedChildTwo name={name} />
    </div>
  )
}
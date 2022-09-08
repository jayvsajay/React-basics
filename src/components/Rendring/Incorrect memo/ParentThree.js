import React, { useState } from 'react'
import { MemoizedChildThree } from './ChildThree'


export const ParentThree = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Ajay')

  console.log('ParentTwo Render')
  return (
    <div>
      <button onClick={() => setName('VInay')}>Change name</button>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      {/* <ChildTwo name={name} /> */}
      <MemoizedChildThree name={name} />
      {/* Strong html with world cause incorrect memo for children */}
         
    </div>
  )
}
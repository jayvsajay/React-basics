import React from 'react'

export const ChildThree = ({ name }) => { //pass as children prop
  console.log('ChildTwo Render')
  return( 
  <div>
      {/*  //{children} */}
      Componejnts- {name}
      </div>
      )
}

export const MemoizedChildThree = React.memo(ChildThree)
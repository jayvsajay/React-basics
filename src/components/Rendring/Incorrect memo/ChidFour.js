import React from 'react'

export const ChidFour = ({name}) => {

    const date=new Date();
  return (
    <div>
        hello {name}  {date.getHours()}  {date.getSeconds()}
    </div>
  )
}
export const MemoizedChildFour = React.memo(ChidFour)

import React from 'react'
import { ChildA } from './components/Rendring/Context/ContextChildren'
import { ContextParent } from './components/Rendring/Context/ContextParent'
import { ParentThree } from './components/Rendring/Incorrect memo/ParentThree'
// import ComponentC from './components/ComponentC'
// import CounterOne from './components/CounterOne'
// import DataFetching from './components/DataFetching'
// import CounterSlice from './feature/counter/counterSlice'
import { Parent } from './components/Rendring/Parentahild/Parent'

export const UserContext=React.createContext()
function App1() {
    const value={
        name:'Ajay',
        Phone:32942910
    }
  return (
    <div>
      {/* <Parent/> */}
        {/* <DataFetching/> */}
        {/* <CounterOne/> */}
        {/* <ParentThree/> */}
        <ContextParent><ChildA/></ContextParent>
        {/* <UserContext.Provider value={value}>
            <ComponentC/>
        </UserContext.Provider> */}
    </div>
  )
}

export default App1
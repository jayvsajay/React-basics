import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
function DataFetching() {

    const initialState={
        isLoading:true,
        posts:{},
        error:''
    }
 const reducer=(state,action)=>{
     switch(action.type){
         case 'Fetching_success':
             return {
                 isLoading:false,
                 posts:action.payload,
                 error:''
             }
             case 'Failure':
                 return {
                     isLoading:false,
                     posts:'',
                     error:'Something went wrong'
                 }
                 default:return state
     }
 }
 const [state,dispatch]=useReducer(reducer,initialState);
 
 useEffect(()=>{
     
     axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(res=>{
         dispatch({type:'Fetching_success',payload:res.data})
     })
    
    .catch(error=>{
        dispatch({type:'Failure'})
    })
 },[])
  return (
    <div>

   {state.isLoading?'loading':state.posts.title}
   {state.error?state.error:null}
    </div>
  )
}

export default DataFetching
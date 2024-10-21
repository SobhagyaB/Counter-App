import React, { useReducer } from 'react'
const initialstate = 0;

const reducer = ((state,action)=>{
    switch(action.type){
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        case 'Reset':
            return initialstate
        default:
            return state
    }

})


    function UseReducedemo(){
        const[state,dispatch] = useReducer(reducer,initialstate)
         
    
  return (
    
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({ type:'Increment'})}>Inc</button>
        <button onClick={()=>dispatch({ type:'Decrement'})}>Dec</button>
        <button onClick={()=>dispatch({ type:'Reset'})}>Reset</button>
      
      
    </div>
  )

}
export default UseReducedemo

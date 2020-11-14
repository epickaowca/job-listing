import React from 'react'
import './App.css';
import {useSelector} from 'react-redux'

function App() {
  const state = useSelector(state=>state.filter)
  console.log(state)
  return (
   <div>
     dziala
   </div>
  );
}

export default App;

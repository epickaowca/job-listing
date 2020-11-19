import React from 'react'
import './App.css';
import Filters from './components/components/Filters';
import Header from './components/components/Header';
import Jobs from './components/components/Jobs';
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Wrappper = styled.div`
  & > div{
    &:nth-child(1){
      z-index: 4;
      background: rgba(0,0,0,.7);
      position: absolute;
      width: 100vw;
      height: 100vh;
    }
  }
`

function App() {
  const state = useSelector(state=>state.filter)
  return (
   <Wrappper>
     {state.filterEject && <div></div>}
     <Header />
     <Filters />
     <Jobs />
   </Wrappper>
  );
}

export default App;

import React from 'react'
import './App.css';
import Filters from './components/components/Filters';
import Header from './components/components/Header';
import Jobs from './components/components/Jobs';

function App() {
  return (
   <div>
     <Header />
     <Jobs />
     {/* <Filters /> */}
   </div>
  );
}

export default App;

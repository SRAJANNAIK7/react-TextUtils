import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import About from './components/About';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#000';  
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';  
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        {/* <TextForm mode={mode}/> */}
        <Routes>
          <Route exact path='/' element={<TextForm mode={mode}/>}></Route>
          <Route exact path='/components/About' element={<About mode={mode}/>}>
            {/* <About mode={mode} /> */}
          </Route>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;

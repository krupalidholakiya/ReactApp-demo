import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {

  const [mode,setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background='black'
    } else {
      setMode('light');
      document.body.style.background='white'
    }
  }
  return (
    <>
      <Navbar title='SIT' aboutText="Contact Us" mode={mode} toggleMode = {toggleMode}/>
      <Textform heading="Enter Your Text To Analyse Below"></Textform>

   </>
  );
}

export default App;

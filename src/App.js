import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {

  const [mode,setMode] = useState('light')

  const [btnText,newbtnText]= useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background='black';
      document.body.style.color='white';

    } else {
      setMode('light');
      document.body.style.background='white';
      document.body.style.color='black';
    }
  }
  return (
    <>
      <Navbar title='SIT' aboutText="Contact Us" mode={mode} toggleMode = {toggleMode} btntext={btnText}/>
      <Textform heading="Enter Your Text To Analyse Below" mode={mode} toggleMode={toggleMode}></Textform>

   </>
  );
}

export default App;

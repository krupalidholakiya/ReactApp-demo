import './App.css'
import React,{ useState } from 'react'
import Navbar from './components/Navbar'
import Textform from './components/textform'


function App() {
  const[mode,setmode] = useState("light");

  const [btntext,setbtnText] = useState("Enable Dark Mode");

  const [alert,setAlert] = useState (null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    },1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.background="green";
      document.body.style.background="yellow";
      setbtnText("Enable Light Mode");
      showAlert("Dark Mode has been Enable","success")
    } else {
      setmode('light')
      document.body.style.background="yellow";
      document.body.style.background="green";
      setbtnText("Enable Dark Mode");
      showAlert("Light Mode has been Enable","success")

    }
  }
 
  const toggleMode1 = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.background="green";
      document.body.style.background="yellow";
      // setbtnText("Enable Light Mode");
    } else {
      setmode('light')
      document.body.style.background="yellow";
      document.body.style.background="green";
      // setbtnText("Enable Dark Mode");
    }
  }
  return (
    <>
  <Navbar title = "SIT" aboutUs ="About Text" mode={mode} toggleMode={toggleMode} btntext={btntext} toggleMode1={toggleMode1}/>
  <Textform heading = "Enter Your Text" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
    </>
  )
}


export default App;

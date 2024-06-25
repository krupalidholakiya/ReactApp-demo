import './App.css'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Textform from './components/textform'
import Privacypolicy from './components/privacypolicy'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

function App() {

 
  const [mode, setmode] = useState("light");

  const [btntext, setbtnText] = useState("Enable Dark Mode");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.background = "black";
      document.body.style.background = "white";
      setbtnText("Enable Light Mode");
      showAlert("Dark Mode has been Enable", "success")
      setInterval(() => {
        document.title = 'SIT - Admission'
      }, 2000);
      setInterval(() => {
        document.title = 'SIT - B.sc.IT'
      }, 1500);
    } else {
      setmode('light')
      document.body.style.background = "white";
      document.body.style.background = "black";
      setbtnText("Enable Dark Mode");
      showAlert("Light Mode has been Enable", "success")

    }
  }

  const toggleMode1 = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.background = "green";
      document.body.style.background = "yellow";
      // setbtnText("Enable Light Mode");
    } else {
      setmode('light')
      document.body.style.background = "yellow";
      document.body.style.background = "green";
      // setbtnText("Enable Dark Mode");
    }
  }
  const router = createBrowserRouter ([
    {
    path: '/Home',
    element: <><Navbar title="GIT" mode={mode} toggleMode={toggleMode}/> 
    <Textform heading = "Enter Your Text" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/> </>
    },
    {
      path:'/privacypolicy',
      element:<><Navbar title="GIT" mode={mode} toggleMode={toggleMode}/> 
      <Privacypolicy /></>
    }
  ])
  return (
    <>
      <RouterProvider router = {router} />
      </>
  )
}


export default App;
 
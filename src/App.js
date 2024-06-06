import './App.css';
import Navbar from './Components/Navbar.js';
import Textform from './Components/Textform.js';

function App() {
  return (
    <>
      <Navbar title='SIT' aboutText="Contact Us"/>
      <Textform heading="Enter Your Text To Analyse Below"></Textform>
   </>
  );
}

export default App;

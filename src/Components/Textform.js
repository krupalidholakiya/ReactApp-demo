import React, { useState } from 'react'


export default function Textform(props) {  
  const [text, setText] = useState("input your text");
  const handleOnChange = (event) =>{
    setText(event.target.value); 
  }
  const handleUpChange = () =>{
    // console.log("Enter Your Text"); 
    let newText = text.toUpperCase(); 
    setText(newText);
  }
  const handleLoChange = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
    
  const handleSpeak = () => {
    // setText('');
    let newText = new SpeechSynthesisUtterance();
    newText.text=text;
    window.speechSynthesis.speak(newText);
  }
  
  const handleClear = () => {
    setText('');
  }
  const handleCopy = () => {
    var newText = document.getElementById
    ('exampleFormControlTextarea1');
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }

  const handleRemoveSpace = () => {
    let newText = text.split(/[] + /);
    setText(newText.join(" "));
  }
  return (
    <div>
      <div class="my-5 container">
      <h1>{props.heading}</h1>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
        <button className='my-3 mx-3 btn btn-outline-success' onClick={handleUpChange}>Covert to Upper Caseletter</button>
        <button className='my-3 mx-3 btn btn-outline-success' onClick={handleLoChange}>Covert to Lower Caseletter</button>
        <button className='my-3 mx-3 btn btn-outline-success' onClick={handleSpeak}>Speak</button>
        <button className='my-3 mx-3 btn btn-outline-success' onClick={handleClear}>Clear</button>
        <button className='my-3 mx-3 btn btn-outline-success' onClick={handleCopy}>Copy Text</button>
        <button className='my-3 mx-3 btn btn-outline-success' onClick={handleRemoveSpace}>Remove Extra Space</button>
        

      </div>
      <div className='container'>
      <h2>Word Count</h2>
      <p>{text.split(" ").length} Words</p>
      <p>{text.length} Characters</p>
      <h5>{0.005 * text.length} Reading Time</h5>
      <h3>Priview</h3>
      <p>{text}</p>
      </div>
    </div>
  )
}
import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Input Your text");
    // setText("Entrer Your Text");

    const handleOnChange = (event) => {
      setText(event.target.value)
    }

    const handleUpChange = () => {
      let newText =  text.toUpperCase();
      setText(newText);
    }

    const handleLowChange = () => {
      let newText = text.toLowerCase();
      setText(newText);
    }
    const handleSpeak = () => {
      let newText = new SpeechSynthesisUtterance();
      newText.text = text;
      window.speechSynthesis.speak(newText);
    }
    const handleClear = () => {
      let newText = "";
      setText(newText);
    }
  return (
    <div className='mb-3 mx-5 my-5'>
        <h1>{props.heading}</h1>
    
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
  <button className='btn btn-outline-info my-3' onClick={handleUpChange}>Convert to Upper Case</button>
  <button className='btn btn-outline-info my-3 mx-5' onClick={handleLowChange}>Convert to Lower Case</button>
  <button className='btn btn-outline-info my-3 mx-5' onClick={handleSpeak}>Speak</button>
  <button className='btn btn-outline-info my-3 mx-5' onClick={handleClear}>Clear</button>
  <div className='container'>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} Woeds</p>
    <p>{text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Reading Time</p>
  
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
</div>
  )
}

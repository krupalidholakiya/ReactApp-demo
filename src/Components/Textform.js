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
  return (
    <div className='mb-3 mx-5 my-5'>
        <h1>{props.heading}</h1>
    
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
  <button className='btn btn-outline-success my-3' onClick={handleUpChange}>Convert to Upper Case</button>
</div>
  )
}

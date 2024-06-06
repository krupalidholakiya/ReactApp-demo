import React,{useState} from 'react'

export default function Textform(props) {
    var [text, setText] = useState("Input Your text");
  return (
    <div className='mb-3 mx-5 my-5'>
        <h1>{props.heading}</h1>
    
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text}></textarea>
  <button className='btn btn-outline-success my-3'>Convert to Upper Case</button>
</div>
  )
}

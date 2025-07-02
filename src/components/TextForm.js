import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase  was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  }

  const handleLoClick = () => {
    // console.log("Uppercase  was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!","success");
  }
  const handleCopy = ()=> {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success");
  }

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!","success");
  }
  
  const handleOnchange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }
  const[text,setText] = useState('');
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnchange} style = {{backgroundColor: props.mode === "light"?"white" : "gray", color: props.mode === "light"?"#042743" : "white"}}id="myBox" rows="8"></textarea>
          {/* two curly braces,one for js and other for object */}
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary" onClick={handleSpaces}>Remove extra spaces</button>


      </div>
      <div className="container my-5">
        <h2>Your text summary</h2>
        <b>{text.split(' ').length} words and {text.length} characters</b><br />
        <b>{0.008 * text.split(' ').length} Minutes read</b>
        <h2 className='mt-4'>Preview</h2>
        <i>{text.length>0?text:"Enter somenthing in the textarea to preview here"}</i>
      </div>
    </>
  )
}

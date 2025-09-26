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
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!","success");
  }

  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!","success");
  }
  
  const handleOnchange = (event) => {
    setText(event.target.value);
  }
  const[text,setText] = useState('');
  return (
    <>
      <div className='container'>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnchange} style = {{backgroundColor: props.mode === "light"?"white" : "rgb(36 74  104)", color: props.mode === "light"?"#042743" : "white"}}id="myBox" rows="8"></textarea>
          {/* two curly braces,one for js and other for object */}
        </div>
        <button disabled = {text.length === 0} className="btn btn-primary my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary my-1 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button disabled = {text.length === 0} className="btn btn-primary my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary my-1 mx-2" onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.length === 0} className="btn btn-primary my-1" onClick={handleSpaces}>Remove extra spaces</button>


      </div>
      <div className="container my-5">
        <h2>Your text summary</h2>
        <b>{text.split(/\s+/).filter((ele) =>{ return ele.length !== 0}).length} words and {text.length} characters</b><br />
        <b>{0.008 * text.split(/\s+/).filter((ele) =>{ return ele.length !== 0}).length} Minutes read</b>
        <h2 className='mt-4'>Preview</h2>
        <i>{text.length>0?text:"Nothing in the textarea to preview."}</i>
      </div>
    </>
  )
}

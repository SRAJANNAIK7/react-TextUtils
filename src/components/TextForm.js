import React, { useState } from "react";

export default function TextForm(props) {
    const [text,setText] = useState('');
    
    const convertUpper = () => {
        let nt = text.toUpperCase();
        setText(nt);
    }

    const convertLower = () => {
      let nt = text.toLowerCase();
      setText(nt);
    } 

    const clearText = () => {
      setText('');
    }

    const copyText = () => {
      navigator.clipboard.writeText(text);  
    }

    const handleSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const handleOnChange = (event)=>{
        setText(event.target.value) 
    }

  return (
    <>
      <div className={`container my-3 text-${props.mode === 'light'?'dark':'light'}`} >
        <h1>Enter the text below to analyze:</h1>
        <div className="form">
          <textarea
            className="form-control"
            placeholder="Enter Text here.."
            id="floatingTextarea2"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>  
        </div>
        <button className="btn btn-dark mx-1 my-2" onClick={convertUpper}>Convert to Uppercase</button>
        <button className="btn btn-dark mx-1 my-2" onClick={convertLower}>Convert to Lowercase</button>
        <button className="btn btn-dark mx-1 my-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-dark mx-1 my-2" onClick={copyText}>Copy Text</button>
        <button className="btn btn-dark mx-1 my-2" onClick={handleSpaces}>Remove Extra Spaces</button>
        
        <div className={`my-2 text-${props.mode === 'light'?'dark':'light'}`}>
          <h2>Summary</h2>
          <p><strong>{text.length === 0 ? 0 :text.split(/\s+/).length}</strong> words and <strong>{text.length}</strong> characters.</p>
          <p><strong>{0.008 * (text.length === 0 ? 0 :text.split(/\s+/).length)}</strong> words can be read per minute.</p>
        </div>
        <div className={`my-2 text-${props.mode === 'light'?'dark':'light'}`}>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview.."}</p>
        </div>
      </div>
    </>
  );
}

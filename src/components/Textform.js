import React ,{useState} from 'react'

export default function Textform(props) {
    const [text,setText]=useState('enter your text');
    const handleUpClick=()=>{
        setText(text.toUpperCase());
    }
    
    const handleOnChange=(event)=>{
   setText(event.target.value); 
    }
    const handlefirstClick = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
   }
    

  return (
    <>

 <div className="mb-2 " style={{color:props.mode === 'dark'?'white':'#042743'}}>
  <h1>{props.heading}</h1>
    <label for="mybox" className="form-label">enter your</label>
    <textarea className="form-control" value={text} style= {{backgroundColor: props.mode === 'dark'?'grey':'white' , color:props.mode === 'dark'?'white':'grey'}} onChange={handleOnChange} id="mybox" rows="12"></textarea>
     <button disabled={text.length===0 } className='btn-primary my-2' onClick={handleUpClick}>convert to uppercase</button>
     <button className='btn-primary my-2 mx-3' onClick={handlefirstClick}>capitalize</button>
 </div>
 <div className='container' style={{color:props.mode === 'dark'?'white':'#042743'}}>
    <p>
    {text.length} characters
    </p>
 </div>
  </>
  )
}

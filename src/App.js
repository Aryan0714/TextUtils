
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React ,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App(){
const [mode, setmode] = useState('light'); 
const [alert, setalert] = useState(null); 
const showAlert = (message , type) => {
  setalert({
    msg : message,
    type : type
  },
  setTimeout(()=>{
      setalert(null);
  } , 2000)
  )
}
  
  const toggleMode = () => {
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('darkmode enabled','success');
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('darkmode disabled','success');
    }
  }
  return(

  <>
  <Router>
 <Navbar title = "Textutils"  mode ={mode} toggleMode={toggleMode}/> 
 <Alert alert = {alert} />
 <div className="container my-24">
    <Routes>
          <Route exact path="/about" element ={<About mode ={mode}/>}/>
          <Route exact path="/" element={  <Textform heading = "enter your text" mode={mode}/>}/>       
     </Routes>
 </div> 
 </Router>
     
 </>    
  );
}



export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));//root mai reactDom se root  jo id h div ki index.html mai usko acces krenge aise document.getElementById('root')
                                                                    // root ko render kr diya
root.render(
  // render se hum kya dikhana h wo btata h jaise yaha pr App component ko
  <React.StrictMode>
    <App />
  </React.StrictMode>
// {/* <h1>hi bro</h1> , document.getElementById(root) */} 
);

reportWebVitals();

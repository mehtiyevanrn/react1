import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
// import './style.css';
import App from './app';





const Index = () => {


   

  return (
    <div>
     
    <App></App>
    </div>
  )
}









let container = document.getElementById("root");
let root = createRoot(container);
root.render(<Index />)



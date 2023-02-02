import './App.css';
import ReactDom from 'react-dom'
import render from 'react-dom';
import Weather from './components/weather';
import { useEffect, useState } from 'react';

function App() {

  
  return (
    <>
    <h3 className='position-relative' id='weather_information'>Weather Information</h3>
   
    <Weather/>
    
    </>
    //document.detElementById("root")
  );
 //)
}

export default App;

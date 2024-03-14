import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import AddEdit from './Components/Pages/AddEdit';
import Home from './Components/Pages/Home';
import Header from './Components/Headers/Header';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Router>
     <div className="App">
      <Header/>
      <ToastContainer position="top-center"/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/addEdit" element={<AddEdit/>}/>
      <Route exact path="/update/:id" element={<AddEdit/>}/>
      </Routes>
      
    </div>
    </Router>
   
  );
}

export default App;

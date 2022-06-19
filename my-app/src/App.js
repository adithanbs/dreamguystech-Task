import React,{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AllList from './component/AllList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FavList from './component/FavList';



function App() {

  return (
    <div className="App">
      {/* <AllList /> */}
      <BrowserRouter>
        <Routes>  
        <Route exact path="/" element={<AllList />} />  
          <Route path="/fav" element={<FavList />} />  
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

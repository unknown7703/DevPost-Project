import React from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Create from "./Pages/Create";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/create' exact element={<Create />} />
      </Routes>
    </Router>
  )
}

export default App;
import React from "react";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"; 
import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import Standard from "./Pages/Standard";
import About from "./Pages/About";
import Signin from "./Pages/Signin";
function App() {
  return (
    <Router > 
         
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/standard' element={<Standard />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />}/>
      </Routes>
      
    </Router>
  );
}

export default App;

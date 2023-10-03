import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './Component/About';
import Home from './Component/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/"
            element={<Home />} />
          <Route exact path="/courses"
            element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

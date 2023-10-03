import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Form } from './Components/Form';
import Home from './Components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Form" element={<Form />} />
    </Routes>);
}

export default App;

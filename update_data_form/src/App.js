import './App.css';
import About from './Components/about';
import Home from './Components/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutPage" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

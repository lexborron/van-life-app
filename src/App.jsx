import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Context provider
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";

import "./App.css";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          #VANLIFE
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <footer>Ⓒ 2024 #VANLIFE</footer>
    </BrowserRouter>
  );
}

export default App;

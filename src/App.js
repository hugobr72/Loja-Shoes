import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id/info' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
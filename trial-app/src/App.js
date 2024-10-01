
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>

  );
}

export default App;

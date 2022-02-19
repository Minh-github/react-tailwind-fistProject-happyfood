import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import MoveToTop from './components/moveToTop';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages';
import Menu from './pages/menu';
import About from './pages/about';
import Contact from './pages/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <MoveToTop/>
      <Footer/>
    </>
  );
}

export default App;

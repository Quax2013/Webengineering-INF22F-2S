import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Navbar>
        <Routes>
          <Route expath="/" element={<Home/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Navbar>
    </Router>
  );
}

export default App;

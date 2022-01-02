import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
  );
}

export default App;

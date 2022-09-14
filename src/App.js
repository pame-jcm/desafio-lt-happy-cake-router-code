
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavPrin from './components/NavPrin';
import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavPrin />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

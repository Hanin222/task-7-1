import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbarcomponent from './component/Navbarcomponent/Navbarcomponent';
import Home from './pages/Home/home';
import Footercomponent  from './component/Footercomponent/Footercomponent '
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/About/About'
import ContactHo from './pages/ContactHo/ContactHo'


function App() {
  return (
    <>
      <Navbarcomponent />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={< About/>} />
        <Route path="/ContactHo" element={< ContactHo/>} />
      </Routes>
      <Footercomponent  />
    </>
  );
}

export default App;
  

// Abouthero
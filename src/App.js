import './App.css';
import Card from './components/cardComponents/card/Card';
import Landing from './pages/Landing';
import Carousels from './pages/Carousels';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavbarDarkMode from './components/Sections/NavbarDarkMode/NavbarDarkMode';
import NavbarLightMode from "./components/Sections/NavbarLigthMode/NavbarLightMode"
import Footer from './components/Sections/Footer/Footer';
import Characters from './pages/Characters'
import Character from './pages/Character'


function App() {
  const location = useLocation()
  console.log(location.pathname)

  return (

    <div className="App">
     

      {(location.pathname == "/" || location.pathname == "/carruselpage") ? <NavbarDarkMode /> : <NavbarLightMode />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/carruselpage" element={<Carousels />} />
        <Route path="/characters" element={<Characters/>} />

      </Routes>
      {location.pathname !== "/" && <Footer /> }

     

    </div>
  );
}

export default App;

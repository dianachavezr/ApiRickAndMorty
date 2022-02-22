import './App.css';
import Landing from './pages/Landing';
import Carousels from './pages/Carousels';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavbarDarkMode from './components/Sections/NavbarDarkMode/NavbarDarkMode';
import NavbarLightMode from "./components/Sections/NavbarLigthMode/NavbarLightMode"


function App() {
  const location = useLocation()
  console.log(location.pathname)

  return (

    <div className="App">
      {(location.pathname == "/" || location.pathname == "/carruselpage") ? <NavbarDarkMode /> : <NavbarLightMode />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/carruselpage" element={<Carousels />} />
      </Routes>
    </div>
  );
}

export default App;

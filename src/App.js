import "./App.css";
import Landing from "./pages/Landing";
import Carousels from "./pages/Carousels";
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarDarkMode from "./components/Sections/NavbarDarkMode/NavbarDarkMode";
import NavbarLightMode from "./components/Sections/NavbarLigthMode/NavbarLightMode";
import Footer from "./components/Sections/Footer/Footer";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import { useState } from "react";

function App() {
    const location = useLocation();
    const [detailCharacter, setDetailCharacter] = useState({})
    console.log(location.pathname);

    function onSetFunction(object){
      setDetailCharacter(object)
    }

    return (
        <div className="App">
            {location.pathname === "/" ||
            location.pathname === "/carruselpage" ? (
                <NavbarDarkMode />
            ) : (
                <NavbarLightMode />
            )}
            <Routes>
                <Route path="/" element={<Landing onSet={onSetFunction} detailCharacter={detailCharacter}/>} />
                <Route path="/carruselpage" element={<Carousels />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/character" element={<Character detailCharacter={detailCharacter}/>} />
            </Routes>
            {location.pathname !== "/" && location.pathname !== "/character"  && <Footer />}
        </div>
    );
}

export default App;

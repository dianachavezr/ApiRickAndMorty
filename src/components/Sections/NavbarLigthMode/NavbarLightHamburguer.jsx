import React from "react";
import "./navbarLight.css";
import NavLinks from "./NavbarLightLinks";
import { ImMenu } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Logo from "../../logo/LogoBlue";
import Github from "../../../assets/github.png";
import Educamas from "../../../assets/EducamasLogoBlack.png";

function NavbarHamburguer() {
    const [open, setOpen] = useState(false);

    const hamburguerOpenIcon = (
        <ImMenu
            className="iconOpenHamburguer"
            size="40px"
            color="white"
            onClick={() => setOpen(!open)}
        />
    );

    const hamburguerCloseIcon = (
        <IoClose
            className="iconCloseHamburguer"
            size="40px"
            color="var(--purple)"
            onClick={() => setOpen(!open)}
        />
    );

    const closeMenu = () => setOpen(false);

    return (
        <div className="navbarHamburguer">
            <div className="navbarHamburguerTop">
                <img className="navbarHamburguer-Logo" src={Github} />

                <img className="navbarHamburguer-Logo" src={Educamas} />
            </div>
            <Logo className="logoHamburguer" />

            <nav className="btn-ham">
                {open ? hamburguerCloseIcon : hamburguerOpenIcon}
                {open && <NavLinks isMobile={true} closeMenu={closeMenu} />}
            </nav>
        </div>
    );
}
export default NavbarHamburguer;

import React from "react";
import LinkButton from "../../Buttons/linkButton/LinkButton";
import LinkButtonGame from "../../Buttons/linkButton/LinkButtonGame";
import { NavLink } from "react-router-dom";

function NavbarLightLinks(props) {
  return (
    <div className="navbarHamburguer1">
      <nav>
        <ul>
          <li onClick={() => props.isMobile && props.closeMenu()}>
            <NavLink to="/">
              <LinkButton
                className="btnHome"
                background="var(--black)"
                color="var(--gray)"
                text="Home"
              />
            </NavLink>
          </li>
          <li onClick={() => props.isMobile && props.closeMenu()}>
            <NavLink to="/characters">
              <LinkButton
                background="var(--black)"
                color="var(--gray)"
                text="Characters"
              />
            </NavLink>
          </li>
          <li onClick={() => props.isMobile && props.closeMenu()}>
            <NavLink to="/carruselpage">
              <LinkButton
                background="var(--black)"
                color="var(--gray)"
                text="Species"
              />
            </NavLink>
          </li>
          <li>
            <LinkButtonGame
              background="var(--black)"
              color="var(--gray)"
              text="Games"
              url="https://www.minijuegos.com/juego/rick-mortys-rushed-licensed-adventure"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarLightLinks;

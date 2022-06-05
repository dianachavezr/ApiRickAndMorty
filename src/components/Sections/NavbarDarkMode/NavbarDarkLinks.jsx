import React from "react";
import LinkButton from "../../Buttons/linkButton/LinkButton";
import LinkButtonGame from "../../Buttons/linkButton/LinkButtonGame";
import { NavLink } from "react-router-dom";

function NavbarDarkLinks(props) {
  return (
    <div className="navbarHamburguerDark">
      <nav>
        <ul>
          <li onClick={() => props.isMobile && props.closeMenu()}>
            <NavLink to="/">
              <LinkButton
                background="var(--transparent)"
                color="var(--blue)"
                text="Home"
              />
            </NavLink>
          </li>
          <li onClick={() => props.isMobile && props.closeMenu()}>
            <NavLink to="/characters">
              <LinkButton
                background="var(--transparent)"
                color="var(--blue)"
                text="Characters"
              />
            </NavLink>
          </li>
          <li onClick={() => props.isMobile && props.closeMenu()}>
            <NavLink to="/carruselpage">
              <LinkButton
                background="var(--transparent)"
                color="var(--blue)"
                text="Species"
              />
            </NavLink>
          </li>
          <li onClick={() => props.isMobile && props.closeMenu()}>
            <LinkButtonGame
              background="var(--transparent)"
              color="var(--blue)"
              text="Games"
              url="https://www.minijuegos.com/juego/rick-mortys-rushed-licensed-adventure"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavbarDarkLinks;

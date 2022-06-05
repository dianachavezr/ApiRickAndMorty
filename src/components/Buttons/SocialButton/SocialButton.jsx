import React from "react";
import "./SocialButton.css";

import Educamas from "../../../assets/EducamasLogo.png";
import ApiDocs from "../../../assets/ApiDocs.png";
import Git from "../../../assets/github-brands.png";
import ReatIcon from "../../../assets/react-brands.png";

const SocialButton = () => {
  return (
    <div className="socialButton">
      <div className="contSocial">
        <a
          href="https://github.com/dianachavezr/ApiRickAndMorty/tree/main"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Git} alt="" className="socialIcon" />
        </a>
        <a
          href="https://es.reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noreferrer"
        >
          <img src={ReatIcon} alt="" className="socialIcon" />
        </a>
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
          <img src={ApiDocs} alt="" />
        </a>
        <a href="https://educamas.com.co/" target="_blank" rel="noreferrer">
          <img src={Educamas} alt="" />
        </a>
      </div>
    </div>
  );
};

export default SocialButton;

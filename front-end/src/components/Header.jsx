import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import logoGitHub from "../assets/logo/github-logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img id="Spotify" src={logoSpotify} alt="Logo do Spotify" />
      </Link>
      <div className="github-section">
        <a
          target="_blank"
          href="https://github.com/Rafa-A-Brito"
          className="github-link"
        >
          <img
            id="Github"
            src={logoGitHub || "/placeholder.svg"}
            alt="Logo do GitHub"
            className="github-logo"
          />
          <div className="tooltip">
            <div>Desenvolvido por Ꝃrꝋnꝋscoder 🤓</div>
            <div>Siga-me no GitHub 💪</div>
          </div>
        </a>
      </div>
      <div className="right-section">
        <Link to="/" className="header__link">
          <h1>Spotify</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;

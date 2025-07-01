"use client";

import { useState, useEffect } from "react";
import logoSpotifyAlto from "../../assets/logo/spotify-alta-resolucao.png";
import "./ModalPopUp.css";

const ModalPopUp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const showModal = () => {
    setIsVisible(true);
    document.body.style.overflow = "hidden";
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.classList.add("blurred");
    }
  };
  const hideModal = () => {
    setIsVisible(false);
    document.body.style.overflow = "auto";
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.classList.remove("blurred");
    }
    localStorage.setItem("spotifyReplicaVisited", "true");
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Escape" && isVisible) {
      hideModal();
    }
  };

  useEffect(() => {
    const hasVisited = localStorage.getItem("spotifyReplicaVisited");

    if (!hasVisited) {
      const timer = setTimeout(() => {
        showModal();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVisible]);

  return (
    <div
      className={`modal-overlay ${!isVisible ? "hidden" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={hideModal}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="modal-body">
          <img id="Spotify" src={logoSpotifyAlto} alt="Logo do Spotify" />
          <h2>Bem-vindo a Réplica do Spotify!</h2>
          <p>Aproveite e experimente o trabalho realizado!</p>
          <div className="modal-body-obs">
            <p>Vale ressaltar que há APENAS uma música por artista.</p>
          </div>
          <button className="modal-button" onClick={hideModal}>
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPopUp;

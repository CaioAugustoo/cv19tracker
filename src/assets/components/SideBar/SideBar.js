import React from "react";

import homeIcon from "../../img/svg/home.svg";
import darkModeIcon from "../../img/svg/darkmode.svg";
import donateIcon from "../../img/svg/donate.svg";
import gitHubIcon from "../../img/svg/github.svg";
import "./style/css/style.css";

const toggleTheme = () => {
  document.body.classList.toggle("light-mode");

  document.body.classList.contains("light-mode")
    ? localStorage.setItem("light-mode", true)
    : localStorage.removeItem("light-mode");
};

const themeSavedLocalStorage = () => {
  const getThemeFromLocalStorage = localStorage.getItem("light-mode");

  getThemeFromLocalStorage
    ? document.body.classList.add("light-mode")
    : localStorage.removeItem("light-mode") &&
      document.body.classList.remove("light-mode");
};
themeSavedLocalStorage();

const SideBar = () => {
  return (
    <div id="sideBar">
      <img
        data-tip="Painel"
        data-place="right"
        src={homeIcon}
        className="current_page"
        width="40"
        alt="Painel"
      />

      <a
        href="https://github.com/CaioAugustoo/cv19tracker"
        rel="noopener noreferrer"
        target="_blank"
        data-tip="Código fonte"
        data-place="right"
      >
        <img src={gitHubIcon} width="25" alt="Código fonte" />
      </a>

      <a
        href="https://www.mercadopago.com.br/checkout/v1/payment/redirect/?preference-id=203314200-8081c797-bf72-4662-b13b-34cec77d85cd"
        rel="noopener noreferrer"
        target="_blank"
        data-tip="Doar pelo o projeto"
        data-place="right"
      >
        <img src={donateIcon} width="15" alt="Doar" />
      </a>

      <img
        data-tip="Alterar tema"
        data-place="right"
        src={darkModeIcon}
        width="30"
        title="Change theme"
        onClick={toggleTheme}
        alt="Alterar tema"
      />
    </div>
  );
};

export default SideBar;

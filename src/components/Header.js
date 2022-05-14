import React from "react";
import estilos from "./Header.module.scss";
const Header = () => {
  return (
    <header className={estilos.header}>
      <div className={estilos.header__content}>
        <h2>Logo</h2>
      </div>
      <nav>
        <ul>Products</ul>
        <ul>Products</ul>
        <ul>Products</ul>
        <ul>Products</ul>
      </nav>
    </header>
  );
};

export default Header;

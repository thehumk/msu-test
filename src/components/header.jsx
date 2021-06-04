import React from 'react';
import logo from '../img/logo-bigdata.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <a href="https://bigdata.msu.ru/">
          <img src={logo} alt="BIGDATA" className="header__logo" width="190" height="35"/>
        </a>
        <p className="header__content">Тестовое задание на позицию Junior Frontend разработчика в Big data MSU</p>
      </div>
    </header>
  );
}

export default Header;

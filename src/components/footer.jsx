import React from 'react';
import logo from '../img/logo-bigdata.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <a href="https://bigdata.msu.ru/">
          <img src={logo} alt="BIGDATA" className="footer__logo" width="141" height="26"/>
        </a>
        <p className="footer__auther">Исполнитель: Андрей Пономарев</p>
      </div>
    </footer>
  )
}

export default Footer;

import React from 'react'
import css from './Header.module.css'
import logo from '../../assets/img/logo.png'

const Header = () => {


  return (
    <header className={css.header}>
          <div className={css.headerContainer}>
              <div className={css.headerAbout}>
                <img className={css.headerLogoImg} src={logo} alt="logo" />
                <h1 className={css.headerTitle}>Steam<span className={css.headerTitleSpan}>World</span></h1>
              </div>
              <div className={css.headerNavigation}>
                <ul className={css.headerMenuList}>
                      <li className={css.headerMenuItem}>Главная</li>
                      <li className={css.headerMenuItem}>Как играть</li>
                      <li className={css.headerMenuItem}>Поддержка</li>
                </ul>
              </div>
              <div className={css.headerButtons}>
                <button className={css.headerButton}>Войти</button>
                <button className={css.headerButton}>Регистрация</button>
              </div>
      </div>
    </header>
  );
};

export default Header;
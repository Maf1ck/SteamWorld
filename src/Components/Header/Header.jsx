import React, { useState, useEffect } from 'react'
import css from './Header.module.css'
import logo from '../../assets/img/logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={css.headerWrapper}>
      {/* Навигационная панель */}
      <header className={`${css.navigationBar} ${isScrolled ? css.scrolled : ''}`}>
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

      {/* Основной баннер с игровой информацией */}
      <section className={`${css.gameBanner} ${isScrolled ? css.scrolled : ''}`}>
        <div className={css.gameInfoContainer}>
          <div className={css.gameInfo}>
            <h2 className={css.gameTitle}>SteamWorld - Сервер на основе Create</h2>
            <p className={css.gameSubtitle}>Погрузись в мир Create</p>

            <div className={css.gameStats}>
              <div className={css.statItem}>
                <span className={css.statLabel}>В ИГРЕ</span>
                <span className={css.statNumber}>0</span>
              </div>
              <div className={css.statItem}>
                <span className={css.statLabel}>ВСЕГО</span>
                <span className={css.statNumber}>0</span>
              </div>
            </div>

            <button className={css.playButton}>
              НАЧАТЬ ИГРАТЬ ►
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
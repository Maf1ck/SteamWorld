import React, { useState, useEffect } from 'react'
import css from './Header.module.css'
import logo from '/img/logo.png'

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

    const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Высота хедера
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      const elementTop = element.offsetTop;
      
      // Вычисляем позицию для центрирования секции
      const centerPosition = elementTop - headerHeight - (windowHeight - elementHeight) / 2;
      
      window.scrollTo({
        top: Math.max(0, centerPosition),
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      const headerHeight = 80;
      const footerTop = footer.offsetTop;
      
      window.scrollTo({
        top: footerTop - headerHeight,
        behavior: 'smooth'
      });
    }
  };

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
              <li className={css.headerMenuItem} onClick={scrollToTop}>Главная</li>
              <li className={css.headerMenuItem} onClick={() => scrollToSection('social')}>Почему мы?</li>
              <li className={css.headerMenuItem} onClick={() => scrollToSection('faq')}>Команда</li>
              <li className={css.headerMenuItem} onClick={scrollToFooter}>FAQ</li>
              <li className={css.headerMenuItem} onClick={() => scrollToSection('team')}>Социальные сети</li>
            </ul>
          </div>
          <div className={css.headerButtons}>
            <button className={css.headerButton}>Войти</button>
            <button className={css.headerButton}>Регистрация</button>
          </div>
        </div>
      </header>

      {/* Основной баннер с игровой информацией */}
      <section className={css.gameBanner}>
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

            <button className={css.playButton} onClick={() => scrollToSection('features')}>
              НАЧАТЬ ИГРАТЬ ►
            </button>
          </div>
          
          <div className={css.gameVideo}>
            <div className={css.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/3fSoaoQg0Ug"
                title="SteamWorld - Сервер на основе Create"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
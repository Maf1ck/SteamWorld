import React, { useState, useEffect, useRef } from 'react'
import css from './Header.module.css'
import logo from '../../assets/img/logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [serverStatus, setServerStatus] = useState({ online: 0, max: 0 });
  const gameInfoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
      
      // Анимация появления gameInfoContainer при скролле
      if (gameInfoRef.current) {
        const element = gameInfoRef.current;
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
          element.classList.add(css.visible);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Запускаем сразу для проверки видимости
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔥 Получаем статус сервера из API
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("https://api.mcsrvstat.us/2/213.152.43.72:25748");
        const data = await res.json();

        if (data.online) {
          setServerStatus({
            online: data.players.online,
            max: data.players.max,
          });
        } else {
          setServerStatus({ online: 0, max: 0 });
        }
      } catch (err) {
        console.error("Ошибка загрузки статуса:", err);
        setServerStatus({ online: 0, max: 0 });
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      const elementTop = element.offsetTop;
      const centerPosition = elementTop - headerHeight - (windowHeight - elementHeight) / 2;

      window.scrollTo({
        top: Math.max(0, centerPosition),
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

 
  return (
    <div className={css.headerWrapper}>
      <header className={`${css.navigationBar} ${isScrolled ? css.scrolled : ''}`}>
        <div className={css.headerContainer}>
          <div className={css.headerAbout}>
            <img className={css.headerLogoImg} src={logo} alt="logo" />
            <h1 className={css.headerTitle}>Steam<span className={css.headerTitleSpan}>World</span></h1>
          </div>
          <div className={css.headerNavigation}>
            <ul className={css.headerMenuList}>
              <li className={css.headerMenuItem} onClick={scrollToTop}>Главная</li>
              <li className={css.headerMenuItem} onClick={() => scrollToSection('features')}>Почему мы?</li>
              <li className={css.headerMenuItem} onClick={() => scrollToSection('team')}>Команда</li>
              <li className={css.headerMenuItem} onClick={() => scrollToSection('faq')}>FAQ</li>
              <li className={css.headerMenuItem} onClick={() => scrollToSection('social')}>Социальные сети</li>
            </ul>
          </div>
          <div className={css.headerButtons}>
            <button className={css.headerButton}>Войти</button>
            <button className={css.headerButton}>Регистрация</button>
          </div>
        </div>
      </header>

      <section className={css.gameBanner}>
        <div ref={gameInfoRef} className={css.gameInfoContainer}>
          <div className={css.gameInfo}>
            <h2 className={css.gameTitle}>SteamWorld - Сервер на основе Create</h2>
            <p className={css.gameSubtitle}>Погрузись в мир Create</p>

            <div className={css.gameStats}>
              <div className={css.statItem}>
                <span className={css.statLabel}>В ИГРЕ</span>
                <span className={css.statNumber}>{serverStatus.online}</span>
              </div>
              <div className={css.statItem}>
                <span className={css.statLabel}>ВСЕГО</span>
                <span className={css.statNumber}>{serverStatus.max}</span>
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
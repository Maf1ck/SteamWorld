import React, { useState, useEffect, useRef } from 'react'
import css from './Footer.module.css'
import Modal from 'react-modal'
import { 
  FaDiscord, 
  FaYoutube, 
  FaTiktok, 
  FaHeart,
  FaServer,
  FaUsers,
  FaShieldAlt,
  FaGamepad,
  FaCube,
  FaMap,
  FaEye,
  FaCog,
  FaDragon,
  FaIndustry,
  FaTimes
} from 'react-icons/fa'

if (typeof document !== 'undefined') {
  Modal.setAppElement('#root');
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [serverStatus, setServerStatus] = useState({ online: 0, max: 0 });

  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const element = footerRef.current;
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
          element.classList.add(css.visible);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
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


  return (
    <>
      <footer ref={footerRef} className={css.footer}>
        <div className={css.container}>
          {/* Основная информация */}
          <div className={css.footerContent}>
            <div className={css.footerSection}>
              <div className={css.footerLogo}>
                <FaServer className={css.logoIcon} />
                <h3 className={css.logoText}>SteamWorld</h3>
              </div>
              <p className={css.footerDescription}>
                Лучший Create сервер в России с дружелюбным сообществом, 
                стабильной работой и уникальными возможностями для игроков.
              </p>
              <div className={css.socialLinks}>
                <a href="https://discord.gg/G2Ttb8Gj7x" target="_blank" rel="noopener noreferrer" className={css.socialLink}>
                  <FaDiscord />
                </a>
                <a href="https://www.youtube.com/watch?v=3fSoaoQg0Ug" target="_blank" rel="noopener noreferrer" className={css.socialLink}>
                  <FaYoutube />
                </a>
                <a href="https://www.tiktok.com/@structo0" target="_blank" rel="noopener noreferrer" className={css.socialLink}>
                  <FaTiktok />
                </a>
              </div>
            </div>

            <div className={css.footerSection}>
              <h4 className={css.sectionTitle}>Сервер</h4>
              <ul className={css.footerLinks}>
                <li><a href="#features" className={css.footerLink}>Почему мы?</a></li>
                <li><a href="#team" className={css.footerLink}>Наша команда</a></li>
                <li><a href="#faq" className={css.footerLink}>FAQ</a></li>
                <li><a href="#social" className={css.footerLink}>Социальные сети</a></li>
              </ul>
            </div>

            <div className={css.footerSection}>
              <h4 className={css.sectionTitle}>Игра</h4>
              <ul className={css.footerLinks}>
                <li><a href="https://discord.com/channels/1398605988822646824/1398988863413948487" className={css.footerLink}>Правила сервера</a></li>
                <li>
                  <button 
                    onClick={() => setIsModalOpen(true)} 
                    className={css.footerLink}
                  >
                    Список модов
                  </button>
                </li>
                <li><a href="#" className={css.footerLink}>Гайды по Create</a></li>
              </ul>
            </div>

            <div className={css.footerSection}>
              <h4 className={css.sectionTitle}>Поддержка</h4>
              <ul className={css.footerLinks}>
                <li><a href="#" className={css.footerLink}>Техническая поддержка</a></li>
                <li><a href="#" className={css.footerLink}>Баги и предложения</a></li>
                <li><a href="#" className={css.footerLink}>Пожаловаться на игрока</a></li>
                <li><a href="#" className={css.footerLink}>Партнерство</a></li>
              </ul>
            </div>
          </div>

          {/* Статистика сервера */}
          <div className={css.serverStats}>
            <div className={css.statItem}>
              <FaUsers className={css.statIcon} />
              <div className={css.statContent}>
                <span className={css.statNumber}>{serverStatus.online}</span>
                <span className={css.statLabel}>Игроков онлайн</span>
              </div>
            </div>
            <div className={css.statItem}>
              <FaServer className={css.statIcon} />
              <div className={css.statContent}>
                <span className={css.statNumber}>99.9%</span>
                <span className={css.statLabel}>Аптайм сервера</span>
              </div>
            </div>
            <div className={css.statItem}>
              <FaShieldAlt className={css.statIcon} />
              <div className={css.statContent}>
                <span className={css.statNumber}>24/7</span>
                <span className={css.statLabel}>Модерация</span>
              </div>
            </div>
            <div className={css.statItem}>
              <FaGamepad className={css.statIcon} />
              <div className={css.statContent}>
                <span className={css.statNumber}>50+</span>
                <span className={css.statLabel}>Модов</span>
              </div>
            </div>
          </div>

          {/* Нижняя часть футера */}
          <div className={css.footerBottom}>
            <div className={css.footerBottomContent}>
              <p className={css.copyright}>
                © {currentYear} SteamWorld. Все права защищены. 
                Сделано с <FaHeart className={css.heartIcon} /> для игрового сообщества
              </p>
              <div className={css.legalLinks}>
                <a href="#" className={css.legalLink}>Политика конфиденциальности</a>
                <a href="#" className={css.legalLink}>Условия использования</a>
                <a href="#" className={css.legalLink}>Правила сервера</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.modalHeader}>
          <h2 className={css.modalTitle}>
            <FaCube className={css.modalTitleIcon} />
            Список модов
          </h2>
          <button 
            onClick={() => setIsModalOpen(false)} 
            className={css.modalCloseButton}
          >
            <FaTimes />
          </button>
        </div>
        
        <div className={css.modalContent}>
          <p className={css.modalDescription}>
            Наш сервер использует следующие моды для улучшения игрового опыта:
          </p>
          
          <ul className={css.modalList}>
            <li className={css.modalListItem}>
              <div className={css.modIcon}>
                <FaCog />
              </div>
              <div className={css.modInfo}>
                <span className={css.modName}>Create</span>
                <span className={css.modDescription}>Мод для создания механизмов</span>
              </div>
            </li>
            
            <li className={css.modalListItem}>
              <div className={css.modIcon}>
                <FaEye />
              </div>
              <div className={css.modInfo}>
                <span className={css.modName}>JEI (Just Enough Items)</span>
                <span className={css.modDescription}>Просмотр рецептов крафта</span>
              </div>
            </li>
            
            <li className={css.modalListItem}>
              <div className={css.modIcon}>
                <FaMap />
              </div>
              <div className={css.modInfo}>
                <span className={css.modName}>JourneyMap</span>
                <span className={css.modDescription}>Карта и навигация</span>
              </div>
            </li>
            
            <li className={css.modalListItem}>
              <div className={css.modIcon}>
                <FaCube style={{color: "#4CAF50"}} />
              </div>
              <div className={css.modInfo}>
                <span className={css.modName}>OptiFine</span>
                <span className={css.modDescription}>Оптимизация графики</span>
              </div>
            </li>
            
            <li className={css.modalListItem}>
              <div className={css.modIcon}>
                <FaDragon />
              </div>
              <div className={css.modInfo}>
                <span className={css.modName}>Alex's Mobs</span>
                <span className={css.modDescription}>Новые мобы в игре</span>
              </div>
            </li>
            
            <li className={css.modalListItem}>
              <div className={css.modIcon}>
                <FaIndustry />
              </div>
              <div className={css.modInfo}>
                <span className={css.modName}>Immersive Engineering</span>
                <span className={css.modDescription}>Индустриальные механизмы</span>
              </div>
            </li>
          </ul>
        </div>
        
        <div className={css.modalFooter}>
          <button onClick={() => setIsModalOpen(false)} className={css.modalCloseBtn}>
            Закрыть
          </button>
          <a 
            href="https://discord.gg/G2Ttb8Gj7x" 
            target="_blank" 
            rel="noopener noreferrer"
            className={css.modalDiscordBtn}
          >
            <FaDiscord /> Получить помощь
          </a>
        </div>
      </Modal>
    </>
  )
}

export default Footer
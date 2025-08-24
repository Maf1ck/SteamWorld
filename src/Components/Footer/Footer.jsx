import React from 'react'
import css from './Footer.module.css'
import { 
  FaDiscord, 
  FaYoutube, 
  FaTiktok, 
  FaHeart,
  FaServer,
  FaUsers,
  FaShieldAlt,
  FaGamepad
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={css.footer}>
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
              <li><a href="#" className={css.footerLink}>Правила сервера</a></li>
              <li><a href="#" className={css.footerLink}>Список модов</a></li>
              <li><a href="#" className={css.footerLink}>Гайды по Create</a></li>
              <li><a href="#" className={css.footerLink}>Карта сервера</a></li>
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
              <span className={css.statNumber}>150+</span>
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
  )
}

export default Footer 
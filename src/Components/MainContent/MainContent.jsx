import React from 'react'
import css from './MainContent.module.css'
import { 
  FaServer, 
  FaUsers, 
  FaShieldAlt, 
  FaGamepad, 
  FaFilter, 
  FaBalanceScale,
  FaMicrochip,
  FaMemory,
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaCheck,
  FaBug,
  FaFire,
  FaSync,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaPalette,
  FaBan,
  FaYoutube,
  FaDiscord,
  FaTiktok
} from 'react-icons/fa'

const MainContent = () => {
  return (
    <main className={css.mainContent}>
      {/* Секция "Почему именно мы?" */}
      <section className={css.featuresSection}>
        <div className={css.container}>
          <h2 className={css.sectionTitle}>Почему именно мы?</h2>
          <p className={css.sectionSubtitle}>
            Ниже мы собрали ключевые причины, по которым игроки выбирают наш сервер. Это не просто слова — это наши реальные принципы, подход и забота о каждом участнике сообщества.
          </p>
          <div className={css.featuresGrid}>
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaServer />
              </div>
              <h3 className={css.featureTitle}>Производительность</h3>
              <p className={css.featureDescription}>
                Нельзя экономить на сервере, поэтому мы покупаем хостинг за 20.000р/мес, обеспечивая игроков хорошим ТПС.
              </p>
              <ul className={css.featureList}>
                <li><FaMicrochip className={css.listIcon} /> AMD Ryzen™ 9 9950X</li>
                <li><FaMemory className={css.listIcon} /> 64 ГБ ОЗУ DDR5</li>
                <li><FaMapMarkerAlt className={css.listIcon} /> Россия, Москва</li>
              </ul>
            </div>
            
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaUsers />
              </div>
              <h3 className={css.featureTitle}>Лучшее комьюнити</h3>
              <p className={css.featureDescription}>
                Наше сообщество очень дружное и ламповое, приветливое и талантливое. Стань его частью!
              </p>
              <ul className={css.featureList}>
                <li><FaStar className={css.listIcon} /> Доброжелательные игроки</li>
                <li><FaHeart className={css.listIcon} /> Лояльная администрация</li>
                <li><FaCheck className={css.listIcon} /> Все следуют правилам</li>
              </ul>
            </div>
            
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaShieldAlt />
              </div>
              <h3 className={css.featureTitle}>Стабильность</h3>
              <p className={css.featureDescription}>
                Сервер всегда включен, лагов не наблюдается, а слежка за проблемами ведётся всегда.
              </p>
              <ul className={css.featureList}>
                <li><FaBug className={css.listIcon} /> Активно исправляем баги</li>
                <li><FaFire className={css.listIcon} /> Поддерживаем играбельный TPS</li>
                <li><FaSync className={css.listIcon} /> Обновляем оборудование</li>
              </ul>
            </div>
            
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaGamepad />
              </div>
              <h3 className={css.featureTitle}>Доступность</h3>
              <p className={css.featureDescription}>
                Возможность попасть к нам на проект абсолютно бесплатная, подав заявку в нашем Дискорд-сервере.
              </p>
              <ul className={css.featureList}>
                <li><FaGamepad className={css.listIcon} /> Легко попасть на сервер</li>
                <li><FaClipboardCheck className={css.listIcon} /> Быстрая проверка заявки</li>
                <li><FaCheck className={css.listIcon} /> Бесплатная проходка</li>
              </ul>
            </div>
            
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaFilter />
              </div>
              <h3 className={css.featureTitle}>Фильтрация игроков</h3>
              <p className={css.featureDescription}>
                У нас очень хорошие правила, а также отличная заявка, что позволяет играть на сервере только адекватам.
              </p>
              <ul className={css.featureList}>
                <li><FaClipboardCheck className={css.listIcon} /> Строгая проверка заявки</li>
                <li><FaExclamationTriangle className={css.listIcon} /> Активная модерация</li>
                <li><FaShieldAlt className={css.listIcon} /> Быстрая выдача наказаний</li>
              </ul>
            </div>
            
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaBalanceScale />
              </div>
              <h3 className={css.featureTitle}>Без влияния на игру</h3>
              <p className={css.featureDescription}>
                Даже при условии наличия доната, мы сбалансировали его так, чтобы он никак не смог помочь в развитии на сервере.
              </p>
              <ul className={css.featureList}>
                <li><FaPalette className={css.listIcon} /> Косметический донат</li>
                <li><FaBan className={css.listIcon} /> Донат не мешает игре</li>
                <li><FaBalanceScale className={css.listIcon} /> Все на равных</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Секция социальных сетей */}
      <section className={css.socialSection}>
        <div className={css.container}>
          <h2 className={css.sectionTitle}>Присоединяйтесь к нам</h2>
          <p className={css.sectionSubtitle}>
            Следите за новостями сервера, общайтесь с игроками и смотрите интересный контент в наших социальных сетях
          </p>
          <div className={css.socialGrid}>
            <div className={`${css.socialCard} ${css.youtubeCard}`}>
              <div className={css.socialIcon}>
                <FaYoutube />
              </div>
              <h3 className={css.socialTitle}>YouTube</h3>
              <p className={css.socialDescription}>
                Смотрите гайды по Create, обзоры сервера и забавные моменты игроков
              </p>
              <button 
                className={`${css.socialButton} ${css.youtubeButton}`}
                onClick={() => window.open('https://www.youtube.com/watch?v=3fSoaoQg0Ug', '_blank')}
              >
                ПОДПИСАТЬСЯ
              </button>
            </div>
            
            <div className={`${css.socialCard} ${css.discordCard}`}>
              <div className={css.socialIcon}>
                <FaDiscord />
              </div>
              <h3 className={css.socialTitle}>Discord</h3>
              <p className={css.socialDescription}>
                Присоединяйтесь к нашему сообществу, общайтесь и получайте поддержку
              </p>
              <button 
                className={`${css.socialButton} ${css.discordButton}`}
                onClick={() => window.open('https://discord.gg/G2Ttb8Gj7x', '_blank')}
              >
                ПРИСОЕДИНИТЬСЯ
              </button>
            </div>
            
            <div className={`${css.socialCard} ${css.tiktokCard}`}>
              <div className={css.socialIcon}>
                <FaTiktok />
              </div>
              <h3 className={css.socialTitle}>TikTok</h3>
              <p className={css.socialDescription}>
                Короткие видео с сервера, лайфхаки и забавные моменты в игре
              </p>
              <button 
                className={`${css.socialButton} ${css.tiktokButton}`}
                onClick={() => window.open('https://www.tiktok.com/@structo0', '_blank')}
              >
                ПОДПИСАТЬСЯ
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default MainContent 
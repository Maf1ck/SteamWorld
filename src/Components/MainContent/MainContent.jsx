import React, { useState } from 'react'
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
  FaTiktok,
  FaQuestionCircle,
  FaChevronDown
} from 'react-icons/fa'

const MainContent = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Как попасть на сервер?",
      answer: "Чтобы попасть на наш сервер, вам нужно подать заявку в нашем Discord-сервере. Заполните анкету, и мы рассмотрим вашу заявку в течение 24 часов. Проходка абсолютно бесплатная!"
    },
    {
      id: 2,
      question: "Какие правила на сервере?",
      answer: "У нас действуют строгие правила, направленные на создание комфортной игровой среды. Основные принципы: уважение к другим игрокам, запрет на читы и багоюз, активное участие в жизни сервера."
    },
    {
      id: 3,
      question: "Есть ли донат на сервере?",
      answer: "Да, у нас есть система доната, но она полностью косметическая. Донат не даёт никаких игровых преимуществ - только красивые скины, эффекты и другие визуальные элементы. Все игроки находятся в равных условиях."
    },
    {
      id: 4,
      question: "Какие моды используются на сервере?",
      answer: "Наш сервер работает на модах Create и других совместимых модах. Полный список модов можно найти в нашем Discord-сервере в разделе #информация."
    },
    {
      id: 5,
      question: "Что делать, если я нашёл баг?",
      answer: "Если вы обнаружили баг, обязательно сообщите о нём в канал #баг-репорты в нашем Discord. Мы активно исправляем все найденные проблемы для улучшения игрового процесса."
    },
    {
      id: 6,
      question: "Как часто обновляется сервер?",
      answer: "Мы регулярно обновляем сервер, добавляя новые функции и исправляя баги. О всех обновлениях мы заранее уведомляем игроков в Discord и на сайте."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

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

      {/* Секция FAQ */}
      <section className={css.faqSection}>
        <div className={css.container}>
          <h2 className={css.sectionTitle}>Часто задаваемые вопросы</h2>
          <p className={css.sectionSubtitle}>
            Ответы на самые популярные вопросы о нашем сервере. Если вы не нашли ответ на свой вопрос, обязательно спросите в нашем Discord!
          </p>
          <div className={css.faqGrid}>
            {faqData.map((item) => (
              <div key={item.id} className={css.faqCard}>
                <div className={css.faqHeader} onClick={() => toggleFaq(item.id)}>
                  <h3 className={css.faqQuestion}>{item.question}</h3>
                  <FaChevronDown className={`${css.faqIcon} ${openFaq === item.id ? css.rotate : ''}`} />
                </div>
                {openFaq === item.id && (
                  <div className={css.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
import React, { useState, useEffect, useRef } from 'react'
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
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaCrown,
  FaCode,
  FaGamepad as FaGamepadIcon,
  FaShieldAlt as FaShieldIcon,
  FaUsers as FaUsersIcon
} from 'react-icons/fa'

const MainContent = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const featuresRef = useRef(null);
  const socialRef = useRef(null);
  const teamRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = [
        { ref: featuresRef, className: css.visible },
        { ref: socialRef, className: css.visible },
        { ref: teamRef, className: css.visible },
        { ref: faqRef, className: css.visible }
      ];
      
      elements.forEach(({ ref, className }) => {
        if (ref.current) {
          const element = ref.current;
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementTop < windowHeight * 0.8) {
            element.classList.add(className);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверяем сразу при загрузке
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamData = [
    {
      id: 1,
      name: "Qwed_is_legacy",
      role: "Основатель & Главный администратор",
      avatar: "/img/qwed_is_legacy.png",
      description: "Создатель проекта и главный администратор сервера. Отвечает за общее развитие проекта, техническую поддержку и стратегическое планирование.",
      skills: ["Управление проектом", "Техническая поддержка", "Строительство"],
      icon: FaCrown
    },
    {
      id: 2,
      name: "Lllavanda",
      role: "Основатель & Главный администратор",
      avatar: "/img/lllavanda_a.png",
      description: "Главный разработчик сервера. Создает уникальные плагины, настраивает моды и обеспечивает стабильную работу всех систем.",
      skills: ["Строительство", "Настройка модов", "Системная архитектура"],
      icon: FaCode
    },
    {
      id: 3,
      name: "Markel2432",
      role: "Основатель & Главный администратор",
      avatar: "/img/markel2432.png",
      description: "Организует игровые события, следит за порядком на сервере и создает увлекательную атмосферу для игроков.",
      skills: ["Организация событий", "Модерация", "Социальная активность"],
      icon: FaGamepadIcon
    },
    {
      id: 4,
      name: "Chikenboy482",
      role: "Основатель & Главный администратор",
      avatar: "/img/chikenboy482.png",
      description: "Отвечает за техническую стабильность сервера, настройку плагинов и решение сложных технических вопросов.",
      skills: ["Техническая поддержка", "Строительство", "Системное администрирование"],
      icon: FaShieldIcon
    },
    {
      id: 5,
      name: "Jokulllka",
      role: "Основатель & Главный администратор",
      avatar: "/img/jokulllka.png",
      description: "Управляет социальными сетями, общается с игроками и создает дружелюбную атмосферу в сообществе.",
      skills: ["Социальные сети", "Комьюнити-менеджмент", "Поддержка игроков"],
      icon: FaUsersIcon
    }
  ];

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

  const nextTeam = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTeamIndex((prev) => (prev + 1) % teamData.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTeam = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTeamIndex((prev) => (prev - 1 + teamData.length) % teamData.length);
      setIsAnimating(false);
    }, 300);
  };

  const getVisibleTeamMembers = () => {
    const members = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentTeamIndex + i) % teamData.length;
      members.push(teamData[index]);
    }
    return members;
  };

  return (
    <main className={css.mainContent}>
      {/* Секция "Почему именно мы?" */}
      <section id="features" ref={featuresRef} className={css.featuresSection}>
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
                Никогда нельзя экономить на комфорте игроков, по этому мы используем мощный хостинг, обеспечивая вас хорошим ТПС и отсутствием лагов.
              </p>
              <ul className={css.featureList}>
                <li><FaMicrochip className={css.listIcon} /> AMD Ryzen™ 9 9950X</li>
                <li><FaMemory className={css.listIcon} /> 64 ГБ ОЗУ DDR5</li>
                <li><FaMapMarkerAlt className={css.listIcon} /> Москва, Россия</li>
              </ul>
            </div>
            
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaUsers />
              </div>
              <h3 className={css.featureTitle}>Дружное комьюнити</h3>
              <p className={css.featureDescription}>
                Ламповое, приветливое, талантливое, сплоченное - это все про наше сообщество игроков! Стань его частью!
              </p>
              <ul className={css.featureList}>
                <li><FaStar className={css.listIcon} /> Помощь новичкам</li>
                <li><FaHeart className={css.listIcon} /> Лояльная администрация</li>
                <li><FaCheck className={css.listIcon} />Доброжелательные игроки</li>
              </ul>
            </div>
            
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaShieldAlt />
              </div>
              <h3 className={css.featureTitle}>Стабильность</h3>
              <p className={css.featureDescription}>
                Сервер работает 24/7, ежедневно перезагружается для устранения проблем. Техническая администрация пристально следит за проблемами и оперативно их решает.
              </p>
              <ul className={css.featureList}>
                <li><FaBug className={css.listIcon} /> Прекрасный тех. админ</li>
                <li><FaFire className={css.listIcon} /> Мы активно исправляем баги</li>
                <li><FaSync className={css.listIcon} /> Правильно распределяем ресурсы сервера</li>
              </ul>
            </div>
            
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaGamepad />
              </div>
              <h3 className={css.featureTitle}>Доступность</h3>
              <p className={css.featureDescription}>
                Попасть на сервер может каждый - проходка бесплатная, нужно лишь пройти небольшой тест, подав заявку на нашем дискорд сервере. 
              </p>
              <ul className={css.featureList}>
                <li><FaGamepad className={css.listIcon} /> Легко попасть на сервер</li>
                <li><FaClipboardCheck className={css.listIcon} /> Быстрая проверка заявки</li>
                <li><FaCheck className={css.listIcon} /> Заход и с пиратской, и с лицензионной версии</li>
              </ul>
            </div>
            
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaFilter />
              </div>
              <h3 className={css.featureTitle}>Фильтрация игроков</h3>
              <p className={css.featureDescription}>
                Администрация активно решает проблемы с нарушителями правил. Чтобы предотвратить попадание недоброжелателей на сервер, мы проводим собеседования с игроками.
              </p>
              <ul className={css.featureList}>
                <li><FaClipboardCheck className={css.listIcon} /> Строгая проверка заявки</li>
                <li><FaExclamationTriangle className={css.listIcon} /> Личное собеседование с игроками</li>
                <li><FaShieldAlt className={css.listIcon} /> Активная модерация</li>
              </ul>
            </div>
            
            <div className={css.featureCard}>
              <div className={css.featureIcon}>
                <FaBalanceScale />
              </div>
              <h3 className={css.featureTitle}>Отсутствия pay to win</h3>
              <p className={css.featureDescription}>
                Мы придерживаемся политики, что все игроки должны иметь одинаковые возможности, по этому донат не дает преимущества на нашем сервере.
              </p>
              <ul className={css.featureList}>
                <li><FaPalette className={css.listIcon} /> Косметический донат</li>
                <li><FaBan className={css.listIcon} /> Донат не дает преимущества в игре</li>
                <li><FaBalanceScale className={css.listIcon} /> Все на равных</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Секция социальных сетей */}
      <section id="social" ref={socialRef} className={css.socialSection}>
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
                Смотрите гайды по Create, обзоры сервера SteamWorld и забавные моменты игроков
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
                Короткие видео с сервера SteamWorld, лайфхаки и забавные моменты в игре
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

      {/* Секция команды */}
      <section id="team" ref={teamRef} className={css.teamSection}>
        <div className={css.container}>
          <h2 className={css.sectionTitle}>Наша команда</h2>
          <p className={css.sectionSubtitle}>
            Познакомьтесь с создателями сервера - талантливой командой, которая делает ваш игровой опыт незабываемым
          </p>
          
          <div className={css.teamCarousel}>
            <button className={css.carouselButton} onClick={prevTeam}>
              <FaChevronLeft />
            </button>
            
            <div className={css.teamGrid}>
              {getVisibleTeamMembers().map((member) => (
                <div key={member.id} className={`${css.teamCard} ${isAnimating ? css.slideOut : ''}`}>
                  <div className={css.teamAvatar}>
                    <img src={member.avatar} alt={member.name} />
                    <div className={css.teamRoleIcon}>
                      <member.icon />
                    </div>
                  </div>
                  <h3 className={css.teamName}>{member.name}</h3>
                  <p className={css.teamRole}>{member.role}</p>
                  <p className={css.teamDescription}>{member.description}</p>
                  <div className={css.teamSkills}>
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={css.teamSkill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <button className={css.carouselButton} onClick={nextTeam}>
              <FaChevronRight />
            </button>
          </div>
          
          <div className={css.carouselDots}>
            {teamData.map((_, index) => (
              <button
                key={index}
                className={`${css.carouselDot} ${currentTeamIndex === index ? css.active : ''}`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentTeamIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Секция FAQ */}
      <section id="faq" ref={faqRef} className={css.faqSection}>
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
    </main>
  )
}

export default MainContent
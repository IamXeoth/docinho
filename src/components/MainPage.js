import React, { useEffect, useState } from 'react';
import { Heart, Music, Calendar, Star, MapPin, Gift, Clock } from 'lucide-react';
import '../styles/main-page.css';

const MainPage = () => {
  // Data de início do namoro
  const startDate = new Date('2025-04-09');
  
  // Contador de tempo de namoro
  const [relationship, setRelationship] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setRelationship({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(timerInterval);
  }, []);

  const calculateDaysUntilBirthday = () => {
    const today = new Date();
    const currentYear = today.getFullYear();

    // Datas de aniversário
    const birthdayGirlfriend = new Date(currentYear, 9, 8); // 8 de outubro (mês é 0-indexed)
    const birthdayBoyfriend = new Date(currentYear, 10, 9);  // 9 de novembro (mês é 0-indexed)

    // Se o aniversário já passou este ano, configuramos para o próximo ano
    if (today > birthdayGirlfriend) {
      birthdayGirlfriend.setFullYear(currentYear + 1);
    }
    
    if (today > birthdayBoyfriend) {
      birthdayBoyfriend.setFullYear(currentYear + 1);
    }

    // Calculando dias restantes para cada aniversário
    const daysToGirlfriendBday = Math.ceil((birthdayGirlfriend - today) / (1000 * 60 * 60 * 24));
    const daysToBoydfriendBday = Math.ceil((birthdayBoyfriend - today) / (1000 * 60 * 60 * 24));
    
    return {
      daysToGirlfriendBday,
      daysToBoydfriendBday
    };
  };
  
  const { daysToGirlfriendBday, daysToBoydfriendBday } = calculateDaysUntilBirthday();

  // Função para gerar mensagem personalizada baseada na proximidade do aniversário
  const getGirlfriendBirthdayMessage = (days) => {
    if (days === 0) return "Hoje é o grande dia! ✨";
    if (days === 1) return "Falta apenas 1 dia! 💫";
    if (days < 7) return `Apenas ${days} dias para celebrarmos! 🌠`;
    if (days < 30) return "As estrelas já estão se alinhando para o seu dia especial! ✨";
    if (days < 90) return "Nosso universo já se prepara para celebrar seu brilho único! 🌌";
    return "Mesmo distante no calendário, seu aniversário é uma estrela que sempre brilha no meu céu! 🌟";
  };

  // Mensagem mais recatada para o aniversário dele
  const getBoyfriendBirthdayMessage = (days) => {
    if (days === 0) return "Hoje é o dia.";
    if (days === 1) return "Amanhã.";
    if (days < 7) return `${days} dias restantes.`;
    if (days < 30) return `${days} dias até a próxima volta solar.`;
    if (days < 90) return `${days} dias.`;
    return "Ponto de órbita em observação.";
  };

  return (
    <div className="main-container">
      <div className="main-content">
        {/* Título */}
        <h1 className="main-title">Nosso Universo</h1>

        {/* Foto Principal */}
        <div className="main-photo-container">
          <img 
            src="/images/photo-main.jpg" 
            alt="Nossa foto juntos" 
            className="main-photo-img"
          />
        </div>

        {/* Carta Romântica */}
        <div className="romantic-letter">
          <h2>Nosso Início</h2>
          <div className="letter-content">
            <p>
              Desde o primeiro momento em que te vi, algo em mim sabia que você era especial. 
              Mesmo em meio a todas as dificuldades e obstáculos que a vida colocou em nosso caminho, 
              meu coração sempre soube que era você. Cada olhar, cada conversa, cada momento compartilhado 
              só confirmou o que eu já sentia desde o início.
            </p>
            <p>
              O universo trabalhou de maneiras misteriosas para nos unir, e agora que estamos 
              juntos, sei que encontrei meu lugar. Entre todos os caminhos que a vida poderia ter tomado, 
              sou grato por cada um que me levou até você. Nosso amor é como as estrelas - eterno, 
              brilhante e capaz de iluminar até as noites mais escuras.
            </p>
            <p>
              Que este seja apenas o começo de uma jornada infinita juntos, onde cada dia 
              é uma nova oportunidade de te amar ainda mais. Não importa o que o futuro nos reserve, 
              sei que enfrentaremos juntos, como sempre fizemos.
            </p>
            <p className="signature">
              Você é meu universo inteiro, minha estrela mais brilhante.
            </p>
            <p className="signature-name">
              <strong>Com todo meu amor,</strong><br />
              <strong>Vinícius</strong>
            </p>
          </div>
        </div>

        {/* Nossa Música */}
        <div className="music-section">
          <div className="nossa-musica">
            <h3>
              <Music size={24} /> Nossa Música
            </h3>
            <iframe 
              src="https://open.spotify.com/embed/track/0X2bh8NVQ8svDQIn2AdCbW" 
              width="100%" 
              height="80" 
              frameBorder="0" 
              allowTransparency="true" 
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>

        {/* Marcos do Relacionamento */}
        <div className="relationship-milestones">
          <h3 className="milestone-title">Nossa História</h3>
          <div className="milestones-container">
            <div className="milestone-card">
              <div className="milestone-icon">
                <Calendar size={24} />
              </div>
              <div className="milestone-content">
                <h4>Primeiro Olhar</h4>
                <p>O momento em que nossos olhares se encontraram e soubemos que algo especial começava</p>
              </div>
            </div>
            <div className="milestone-card">
              <div className="milestone-icon">
                <MapPin size={24} />
              </div>
              <div className="milestone-content">
                <h4>Primeira Conexão</h4>
                <p>Quando descobrimos que nossas almas já se conheciam há muito tempo</p>
              </div>
            </div>
            <div className="milestone-card">
              <div className="milestone-icon">
                <Star size={24} />
              </div>
              <div className="milestone-content">
                <h4>Primeiro Sim</h4>
                <p>O começo da nossa jornada juntos, quando decidimos que nossos caminhos seriam um só</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contador de Tempo de Namoro */}
        <div className="time-together-container">
          <h3 className="time-together-title">Tempo Juntos</h3>
          <div className="time-circles-container">
            <div className="time-circle">
              <div className="circle-content">
                <div className="time-number">{relationship.days}</div>
                <div className="time-label">Dias</div>
              </div>
            </div>
            <div className="time-circle">
              <div className="circle-content">
                <div className="time-number">{relationship.hours}</div>
                <div className="time-label">Horas</div>
              </div>
            </div>
            <div className="time-circle">
              <div className="circle-content">
                <div className="time-number">{relationship.minutes}</div>
                <div className="time-label">Minutos</div>
              </div>
            </div>
            <div className="time-circle">
              <div className="circle-content">
                <div className="time-number">{relationship.seconds}</div>
                <div className="time-label">Segundos</div>
              </div>
            </div>
          </div>
          <div className="time-message">
            Cada segundo ao seu lado é um presente que o universo me deu
          </div>
        </div>

        {/* Seção de Aniversários */}
        <div className="birthday-countdown">
          <h2 className="birthday-section-title">
            <Gift size={24} /> Nossas Constelações
          </h2>
          
          <div className="birthday-cards-container">
            <div className="birthday-card her-birthday">
              <div className="birthday-card-content">
                <div className="birthday-date">8 de Outubro</div>
                <div className="countdown-circle">
                  <div className="days-number">{daysToGirlfriendBday}</div>
                  <div className="days-text">dias</div>
                </div>
                <div className="birthday-message">
                  {getGirlfriendBirthdayMessage(daysToGirlfriendBday)}
                </div>
              </div>
              <div className="birthday-card-footer">
                <span>Aniversário da Minha Estrela</span>
              </div>
            </div>
            
            <div className="birthday-card his-birthday">
              <div className="birthday-card-content">
                <div className="birthday-date">9 de Novembro</div>
                <div className="countdown-circle">
                  <div className="days-number">{daysToBoydfriendBday}</div>
                  <div className="days-text">dias</div>
                </div>
                <div className="birthday-message">
                  {getBoyfriendBirthdayMessage(daysToBoydfriendBday)}
                </div>
              </div>
              <div className="birthday-card-footer">
                <span>Aniversário do Seu Planeta</span>
              </div>
            </div>
          </div>
          
          <div className="cosmic-quote">
            <Clock size={18} />
            <p>"Juntos, nossos corações batem como um único pulsar cósmico. 
            Cada segundo ao seu lado é um presente do universo, uma prova de que
            fomos feitos para orbitar um ao outro por toda a eternidade."</p>
          </div>
        </div>

        {/* Mensagem Estelar */}
        <div className="stellar-message-container">
          <div className="stellar-message-wrapper">
            <div className="star star1"></div>
            <div className="star star2"></div>
            <div className="star star3"></div>
            <div className="star star4"></div>
            <div className="star star5"></div>
            <div className="star star6"></div>
            
            <div className="stellar-content">
              <h3 className="stellar-title">Nosso Infinito</h3>
              <p className="stellar-text">
                De todas as infinitas possibilidades do universo, encontrar você foi a mais perfeita.
                Em cada olhar trocado, em cada palavra dita, em cada silêncio compartilhado,
                nosso amor cresce como uma estrela que nunca deixará de brilhar.
                Sou imensamente grato por ter você, minha constelação favorita no céu da minha vida.
              </p>
              <div className="stellar-signature">
                Para sempre seu, em qualquer universo, minha autista kkk 💚.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
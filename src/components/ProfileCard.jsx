import { useState } from 'react';
import './ProfileCard.css';


function ProfileCard() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleSubscribe = () => {
    setIsSubscribed(!isSubscribed); 
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`card ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <img className="card-img" src="https://assets.epuzzle.info/puzzle/136/889/original.jpg" alt="Соул Гудман" />
      <div className="title">Соул Гудман</div>
      <p className="description">
        Харизматичный и изворотливый криминальный адвокат из культовых американских сериалов.
      </p>
    <button 
    className={`btn-subscribe ${isSubscribed ? 'subscribed' : ''}`}
    onClick={toggleSubscribe}
    >
    {isSubscribed ? 'Вы подписаны ✓' : 'Подписаться'}
    </button>
    <button 
    className="btn-theme"
    onClick={toggleTheme}
    >
    {isDark ? '☀️ Светлая тема' : '🌙 Тёмная тема'}
    </button>
    </div>
  );
}

export default ProfileCard;
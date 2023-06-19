import React from 'react';

import mainLogo from '../images/mainLogo.png';
import play from '../images/play.svg';

const HomePage = () => {
  return (
    <section className="welcomePage">
      {/* Верхний блок */}
      <div className="welcomePage-header">
        <img src={mainLogo} alt="логотип сайта" className="welcomePage-header-img" />
        <h1 className="welcomePage-header-title">АККОМПАНЕМЕНТ</h1>
        <div className="welcomePage-header-subtitle">
          <img src={play} alt="иконка play" className="welcomePage-header-subtitle-img" />
          <p className="welcomePage-header-subtitle-text">ДЛЯ ВСЕХ</p>
        </div>
      </div>
      {/* Нижний блок */}
      <div className="welcomePage-description">
        <h4 className="welcomePage-description-text">
          ЗДЕСЬ ГОТОВЯТСЯ СОЛИСТЫ <br />
          ДЛЯ БОЛЬШОЙ СЦЕНЫ
        </h4>
        <img src={play} alt="иконка play" className="welcomePage-description-img" />
      </div>
    </section>
  );
};

export default HomePage;

import React from 'react';

import { Link } from 'react-router-dom';

import mainLogo from '../images/mainLogo.png';
import play from '../images/play.svg';

const HomePage = () => {
  return (
    <section className="welcomePage">
      {/* Верхний блок */}
      <div className="welcomePage__header">
        <img src={mainLogo} alt="логотип сайта" className="welcomePage__header__img" />
        <h1 className="welcomePage__header__title">АККОМПАНЕМЕНТ</h1>
        <div className="welcomePage__header__subtitle">
          <img src={play} alt="иконка play" className="welcomePage__header__subtitle__img" />
          <p className="welcomePage__header__subtitle__text">ДЛЯ ВСЕХ</p>
        </div>
      </div>
      {/* Нижний блок */}
      <div className="welcomePage__description">
        <h4 className="welcomePage__description__text">
          ЗДЕСЬ ГОТОВЯТСЯ СОЛИСТЫ <br />
          ДЛЯ БОЛЬШОЙ СЦЕНЫ
        </h4>

        <Link to="/select-page">
          <img src={play} alt="иконка play" className="welcomePage__description__img" />
        </Link>
      </div>
    </section>
  );
};

export default HomePage;

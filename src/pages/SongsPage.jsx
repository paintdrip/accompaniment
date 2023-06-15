import React from 'react';

import nota_logo from '../images/nota_logo.svg';
import { Header } from '../components/Header';
import search_icon from '../images/search_icon.svg';

export const SongsPage = () => {
  return (
    <section className="songsPage">
      <Header />
      <div className="songsPage-main">
        <div className="songsPage-main-titleblock">
          <img
            src={nota_logo}
            alt="Иконка отображения пользователя"
            className="songsPage-main-titleblock-logo"
          />
          <h2 className="songsPage-main-titleblock-text">
            СТРУННЫЕ
            <br />
            ИНСТРУМЕНТЫ
          </h2>
        </div>
        <div className="songsPage-main-buttons">
          <div className="songsPage-main-buttons-up">
            <button className="bth-main">МУЗЫКАЛЬНАЯ ШКОЛА</button>
            <button className="bth-main">ПРОФ ОБРАЗОВАНИЕ</button>
          </div>
          <div className="songsPage-main-buttons-down">
            <button className="bth">СКРИПКА</button>
            <button className="bth">АЛЬТ</button>
            <button className="bth">ВИОЛОНЧЕЛЬ</button>
            <button className="bth">КОНТРАБАС</button>
          </div>
        </div>
        <div className="centering">
          <div className="songsPage-main-entering">
            <input
              className="songsPage-main-entering-input"
              placeholder="ПОИСК КОМПОЗИЦИЙ"
              type="text"
            />
            <button className="songsPage-main-entering-btn">
              <img
                className="songsPage-main-entering-image"
                src={search_icon}
                alt="Иконка поиска"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

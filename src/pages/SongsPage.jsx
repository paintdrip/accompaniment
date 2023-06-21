import React from 'react';

import { Header } from '../components/Header/Header';

import nota_logo from '../images/nota_logo.svg';
import search_icon from '../images/search_icon.svg';
import stick from '../images/stick.svg';
import piano_logo from '../images/piano_logo.svg';

export const SongsPage = () => {
  return (
    <section className="songsPage">
      <Header />
      <div className="songsPage-main">
        {/* логотип */}
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
        {/* панель категорий */}
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
        {/* панель с input'ом поиска */}
        <div className="centering">
          <div className="songsPage-main-entering">
            <input
              className="songsPage-main-entering-input"
              placeholder="▶ ПОИСК КОМПОЗИЦИЙ"
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
        {/* секция с аудиотреками */}
        <section className="audioBlocks">
          <div className="audioBlocks-main">
            <p className="audioBlocks-main-symbol">▶</p>
            <p className="audioBlocks-main-name">
              Бах
              <br />
              Иоганн
              <br />
              Себастьян
            </p>
            <img src={stick} alt="Разделительный контур" className="audioBlocks-main-stick" />
            <p className="audioBlocks-main-description">
              Концерт № 1 для скрипки и струнных (ля минор)
              <br />
              BWV 1041
            </p>
            <img src={stick} alt="Разделительный контур" className="audioBlocks-main-stick" />
            <img src={piano_logo} alt="Иконка пианино" className="audioBlocks-main-piano" />
          </div>

          <div className="audioBlocks-main">
            <p className="audioBlocks-main-symbol">▶</p>
            <p className="audioBlocks-main-name">
              Бах
              <br />
              Иоганн
              <br />
              Себастьян
            </p>
            <img src={stick} alt="Разделительный контур" className="audioBlocks-main-stick" />
            <p className="audioBlocks-main-description">
              Концерт № 1 для скрипки и струнных (ля минор)
              <br />
              BWV 1041
            </p>
            <img src={stick} alt="Разделительный контур" className="audioBlocks-main-stick" />
            <img src={piano_logo} alt="Иконка пианино" className="audioBlocks-main-piano" />
          </div>

          <div className="audioBlocks-main">
            <p className="audioBlocks-main-symbol">▶</p>
            <p className="audioBlocks-main-name">
              Бах
              <br />
              Иоганн
              <br />
              Себастьян
            </p>
            <img src={stick} alt="Разделительный контур" className="audioBlocks-main-stick" />
            <p className="audioBlocks-main-description">
              Концерт № 1 для скрипки и струнных (ля минор)
              <br />
              BWV 1041
            </p>
            <img src={stick} alt="Разделительный контур" className="audioBlocks-main-stick" />
            <img src={piano_logo} alt="Иконка пианино" className="audioBlocks-main-piano" />
          </div>
        </section>
      </div>
    </section>
  );
};

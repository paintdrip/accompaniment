import React from 'react';

import Header from '../components/Header/Header';

import nota_logo from '../images/nota_logo.svg';
import search_icon from '../images/search_icon.svg';
import stick from '../images/stick.svg';
import piano_logo from '../images/piano_logo.svg';

const SongsPage = () => {
  return (
    <div className="wrapper">
      <section className="songsPage">
        <Header />
        <div className="songsPage__main">
          {/* логотип */}
          <div className="songsPage__main__title-block">
            <img
              src={nota_logo}
              alt="Иконка отображения пользователя"
              className="songsPage__main__title-block__logo"
            />
            <h2 className="songsPage__main__title-block__text">
              СТРУННЫЕ
              <br />
              ИНСТРУМЕНТЫ
            </h2>
          </div>
          {/* панель категорий */}
          <div className="songsPage__main__buttons">
            <div className="songsPage__main__buttons__up">
              <button className="bth__main">МУЗЫКАЛЬНАЯ ШКОЛА</button>
              <button className="bth__main">ПРОФ ОБРАЗОВАНИЕ</button>
            </div>
            <div className="songsPage__main__buttons__down">
              <button className="bth">СКРИПКА</button>
              <button className="bth">АЛЬТ</button>
              <button className="bth">ВИОЛОНЧЕЛЬ</button>
              <button className="bth">КОНТРАБАС</button>
            </div>
          </div>
          {/* панель с input'ом поиска */}
          <div className="centering">
            <div className="songsPage__main__entering">
              <input
                className="songsPage__main__entering__input"
                placeholder="▶ ПОИСК КОМПОЗИЦИЙ"
                type="text"
              />
              <button className="songsPage__main__entering__btn">
                <img
                  className="songsPage__main__entering__image"
                  src={search_icon}
                  alt="Иконка поиска"
                />
              </button>
            </div>
          </div>
          {/* секция с аудиотреками */}
          <section className="audioBlocks">
            <div className="audioBlocks__main">
              <p className="audioBlocks__main__symbol">▶</p>
              <p className="audioBlocks__main__name">
                Бах
                <br />
                Иоганн
                <br />
                Себастьян
              </p>
              <img src={stick} alt="Разделительный контур" className="audioBlocks__main__stick" />
              <p className="audioBlocks__main__description">
                Концерт № 1 для скрипки и струнных (ля минор)
                <br />
                BWV 1041
              </p>
              <img src={stick} alt="Разделительный контур" className="audioBlocks__main__stick" />
              <img src={piano_logo} alt="Иконка пианино" className="audioBlocks__main__piano" />
            </div>

            <div className="audioBlocks__main">
              <p className="audioBlocks__main__symbol">▶</p>
              <p className="audioBlocks__main__name">
                Бах
                <br />
                Иоганн
                <br />
                Себастьян
              </p>
              <img src={stick} alt="Разделительный контур" className="audioBlocks__main__stick" />
              <p className="audioBlocks__main__description">
                Концерт № 1 для скрипки и струнных (ля минор)
                <br />
                BWV 1041
              </p>
              <img src={stick} alt="Разделительный контур" className="audioBlocks__main__stick" />
              <img src={piano_logo} alt="Иконка пианино" className="audioBlocks__main__piano" />
            </div>

            <div className="audioBlocks__main">
              <p className="audioBlocks__main__symbol">▶</p>
              <p className="audioBlocks__main__name">
                Бах
                <br />
                Иоганн
                <br />
                Себастьян
              </p>
              <img src={stick} alt="Разделительный контур" className="audioBlocks__main__stick" />
              <p className="audioBlocks__main__description">
                Концерт № 1 для скрипки и струнных (ля минор)
                <br />
                BWV 1041
              </p>
              <img src={stick} alt="Разделительный контур" className="audioBlocks__main__stick" />
              <img src={piano_logo} alt="Иконка пианино" className="audioBlocks__main__piano" />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default SongsPage;

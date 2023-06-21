import React, { useState } from 'react';

import { Header } from '../components/Header/Header';

import logo_accomp_full from '../images/LogoAccompFull.svg';
import musiccard_logo from '../images/musiccard_logo.svg';
import left_button from '../images/switches/left_button.svg';
import play_button from '../images/switches/play_button.svg';
import looping_button from '../images/switches/looping_button.svg';
import temp_100 from '../images/pace/temp_100.svg';
import temp_112 from '../images/pace/temp_112.svg';
import temp_120 from '../images/pace/temp_120.svg';
import nota_second_logo from '../images/nota_second_logo.svg';
import imageframe from '../images/imageframe.svg';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export const AudioPlayer = () => {
  return (
    <div className="wrapper">
      {/* Верхний блок */}
      <section className="audioplayer">
        <Header />
        <div className="audioplayer__main">
          {/* карточка для аккомпанемента */}
          <div className="audioplayer__main__music-card">
            <img
              src={musiccard_logo}
              alt="карточка аккомпанемента"
              className="audioplayer__main__music-card__logo"
            />
            <b className="audioplayer__main__music-card__name">
              Концерт № 1 для скрипки и струнных (ля минор) BWV 1041
            </b>
            <b className="audioplayer__main__music-card__composer">Иоганн Себастьян Бах</b>
            {/* слайдер, кнопки и выбор темпа */}
            <container className="slider">
              {/* слайдер */}
              <div className="slider__range">
                <p className="slider__range__timing">2:47</p>
                <Slider className="slider__range__strip" />
                <p className="slider__range__timing">5:28</p>
              </div>
              {/* переключатели */}
              <div className="slider__switches">
                <img
                  src={left_button}
                  alt="кнопка прокрутки влево"
                  className="slider__switches__btn"
                />
                <img
                  src={play_button}
                  alt="кнопка запуска"
                  className="slider__switches__btn__main"
                />
                <img
                  src={looping_button}
                  alt="кнопка зацикливания"
                  className="slider__switches__btn"
                />
              </div>
              {/* выбор темпа */}
              <div className="slider__temps">
                <img src={temp_100} alt="темп 100" className="slider__temps__icon" />
                <img src={temp_112} alt="темп 112" className="slider__temps__icon" />
                <img src={temp_120} alt="темп 120" className="slider__temps__icon" />
              </div>
            </container>
          </div>
        </div>
      </section>
      {/* Нижний блок */}
      <section className="description">
        {/* иконка */}
        <button className="description__btn">▶ СКАЧАТЬ НОТЫ</button>
        <div className="description__card">
          <img src={nota_second_logo} alt="нота (логотип)" className="description__card__icon" />
          <h3 className="description__card__title">«Христоматия для скрипки» И.И. Иванова</h3>
          <p className="description__card__synopsis">
            Иоганн Себастьян Бах - Концерт № 1 для скрипки и струнных (ля минор) BWV 1041
          </p>
        </div>

        <div className="description__image-block">
          {/* изображение композитора */}
          <img src={imageframe} alt="Фон изображения" className="description__image-block__frame" />
        </div>
        <div className="description__text-block">
          {/* фио композитора */}
          <h2 className="description__text-block__title">Иоганн Себастьян Бах</h2>
          <p className="description__text-block__synopsis">
            Немецкий композитор, органист, капельмейстер, музыкальный педагог. Бах - автор более
            1000 музыкальных произведений во всех значимых жанрах своего времени Концерт для скрипки
            с оркестром ля минор, BWV 1041, был написан Иоганном Себастьяном Бахом. Хотя "обычно
            считается, что он был написан в Кетене в 1717-23 годах"[1] , Кристоф Вольф утверждает,
            что произведение могло быть написано в Лейпциге[2] во времена Баха в качестве директора
            Collegium Musicum; Джон Батт также считает, что Бах написал его "вероятно, вскоре после
            вступления во владениеЛейпцигская музыкальная коллегия в 1729 году". В любом случае,
            единственным сохранившимся источником автографов являются части, которые Бах переписал
            (вместе с другими переписчиками)[3] в Лейпциге около 1730 года [4] с ныне утраченной
            партитуры или черновика. Концерт для скрипки с оркестром ля минор, BWV 1041, был написан
            Иоганном Себастьяном Бахом. Хотя "обычно считается, что он был написан в Кетене в
            1717-23 годах"[1] , Кристоф Вольф утверждает, что произведение могло быть написано в
            Лейпциге[2] во времена Баха в качестве директора Collegium Musicum; Джон Батт также
            считает, что Бах написал его "вероятно, вскоре после вступления во владениеЛейпцигская
            музыкальная коллегия в 1729 году". В любом случае, единственным сохранившимся источником
            автографов являются части, которые Бах переписал (вместе с другими переписчиками)[3] в
            Лейпциге около 1730 года [4] с ныне утраченной партитуры или черновика.Концерт для
            скрипки с оркестром ля минор, BWV 1041, был написан Иоганном Себастьяном Бахом. Хотя
            "обычно считается, что он был написан в Кетене в 1717-23 годах"[1] , Кристоф Вольф
            утверждает, что произведение могло быть написано в Лейпциге[2] во времена Баха в
            качестве
          </p>
        </div>
      </section>
    </div>
  );
};

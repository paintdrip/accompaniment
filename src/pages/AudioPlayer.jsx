import React from 'react';

import { Header } from '../components/Header';

import logo_accomp_full from '../images/LogoAccompFull.svg';
import musiccard_logo from '../images/musiccard_logo.svg';
import left_button from '../images/switches/left_button.svg';
import play_button from '../images/switches/play_button.svg';
import looping_button from '../images/switches/looping_button.svg';
import temp_100 from '../images/pace/temp_100.svg';
import temp_112 from '../images/pace/temp_112.svg';
import temp_120 from '../images/pace/temp_120.svg';

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export const AudioPlayer = () => {
  return (
    <section className="audioplayer">
      <Header />
      <div className="audioplayer-main">
        {/* основной логотип */}
        <img src={logo_accomp_full} alt="логотип сайта" className="audioplayer-main-logo" />
        {/* карточка для аккомпанемента */}
        <div className="audioplayer-main-musiccard">
          <img
            src={musiccard_logo}
            alt="карточка аккомпанемента"
            className="audioplayer-main-musiccard-logo"
          />
          <b className="audioplayer-main-musiccard-name">
            Концерт № 1 для скрипки и струнных (ля минор) BWV 1041
          </b>
          <b className="audioplayer-main-musiccard-composer">Иоганн Себастьян Бах</b>
          {/* слайдер, кнопки и выбор темпа */}
          <container className="slider">
            {/* слайдер */}
            <div className="slider-range">
              <p>2:47</p>
              <Slider className="slider-range-strip" />
              <p>5:28</p>
            </div>
            {/* переключатели */}
            <div className="slider-switches">
              <img src={left_button} alt="кнопка прокрутки влево" className="slider-switches-btn" />
              <img src={play_button} alt="кнопка запуска" className="slider-switches-btn-main" />
              <img src={looping_button} alt="кнопка зацикливания" className="slider-switches-btn" />
            </div>
            {/* выбор темпа */}
            <div className="slider-temps">
              <img src={temp_100} alt="темп 100" className="slider-temps-icon" />
              <img src={temp_112} alt="темп 112" className="slider-temps-icon" />
              <img src={temp_120} alt="темп 120" className="slider-temps-icon" />
            </div>
          </container>
        </div>
      </div>
    </section>
  );
};

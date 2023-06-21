import React from 'react';

import { Header } from '../components/Header/Header';

import logo_accomp_full from '../images/LogoAccompFull.svg';

import strunnie_instr from '../images/icons/strunnie.svg';
import duhovie_instr from '../images/icons/duhovie.svg';
import udarnie_instr from '../images/icons/udarnie.svg';
import narodnie_instr from '../images/icons/narodnie.svg';
import folqlernie_instr from '../images/icons/folqlernie.svg';
import narodniy_vocal from '../images/icons/narodniy_vocal.svg';
import academ_vocal from '../images/icons/academ_vocal.svg';
import estradnoe from '../images/icons/estradnoe.svg';

export const SelectPage = () => {
  return (
    <section className="selectPage">
      <Header />
      <div className="selectPage-main">
        <div className="selectPage-main-blocks">
          {/* струнные инструменты */}
          <img
            src={strunnie_instr}
            alt="Аккомпанемент для всех"
            className="selectPage-main-blocks-logo"
          />
          {/* духовые инструменты */}
          <img
            src={duhovie_instr}
            alt="Аккомпанемент для всех"
            className="selectPage-main-blocks-logo"
          />
          {/* ударные инструменты */}
          <img
            src={udarnie_instr}
            alt="Аккомпанемент для всех"
            className="selectPage-main-blocks-logo"
          />
          {/* народные инструменты */}
          <img
            src={narodnie_instr}
            alt="Аккомпанемент для всех"
            className="selectPage-main-blocks-logo"
          />
          {/* фольклорные инструменты */}
          <img
            src={folqlernie_instr}
            alt="Аккомпанемент для всех"
            className="selectPage-main-blocks-logo"
          />
          {/* народный вокал */}
          <img
            src={narodniy_vocal}
            alt="Аккомпанемент для всех"
            className="selectPage-main-blocks-logo"
          />
          {/* академический вокал */}
          <img
            src={academ_vocal}
            alt="Аккомпанемент для всех"
            className="selectPage-main-blocks-logo"
          />
          {/* эстрадное направление */}
          <img
            src={estradnoe}
            alt="Аккомпанемент для всех"
            className="selectPage-main-blocks-logo"
          />
        </div>
      </div>
    </section>
  );
};

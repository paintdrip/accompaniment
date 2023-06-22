import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';

import logo_accomp_full from '../images/LogoAccompFull.svg';

import strunnie_instr from '../images/icons/strunnie.svg';
import duhovie_instr from '../images/icons/duhovie.svg';
import udarnie_instr from '../images/icons/udarnie.svg';
import narodnie_instr from '../images/icons/narodnie.svg';
import folqlernie_instr from '../images/icons/folqlernie.svg';
import narodniy_vocal from '../images/icons/narodniy_vocal.svg';
import academ_vocal from '../images/icons/academ_vocal.svg';
import estradnoe from '../images/icons/estradnoe.svg';

const SelectPage = () => {
  return (
    <div className="wrapper">
      <section className="selectPage">
        <Header />
        <div className="selectPage__main">
          <div className="selectPage__main__blocks">
            {/* струнные инструменты */}
            <Link to="/songs-page">
              <img
                src={strunnie_instr}
                alt="Аккомпанемент для всех"
                className="selectPage__main__blocks__logo"
              />
            </Link>

            {/* духовые инструменты */}
            <Link to="/songs-page">
              <img
                src={duhovie_instr}
                alt="Аккомпанемент для всех"
                className="selectPage__main__blocks__logo"
              />
            </Link>

            {/* ударные инструменты */}
            <Link to="/songs-page">
              <img
                src={udarnie_instr}
                alt="Аккомпанемент для всех"
                className="selectPage__main__blocks__logo"
              />
            </Link>

            {/* народные инструменты */}
            <Link to="/songs-page">
              <img
                src={narodnie_instr}
                alt="Аккомпанемент для всех"
                className="selectPage__main__blocks__logo"
              />
            </Link>

            {/* фольклорные инструменты */}
            <Link to="/songs-page">
              <img
                src={folqlernie_instr}
                alt="Аккомпанемент для всех"
                className="selectPage__main__blocks__logo"
              />
            </Link>

            {/* народный вокал */}
            <Link to="/songs-page">
              <img
                src={narodniy_vocal}
                alt="Аккомпанемент для всех"
                className="selectPage__main__blocks__logo"
              />
            </Link>

            {/* академический вокал */}
            <Link to="/songs-page">
              <img
                src={academ_vocal}
                alt="Аккомпанемент для всех"
                className="selectPage__main__blocks__logo"
              />
            </Link>

            {/* эстрадное направление */}
            <Link to="/songs-page">
              <img
                src={estradnoe}
                alt="Аккомпанемент для всех"
                className="selectPage__main__blocks__logo"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectPage;

import './scss/App.scss';

import HomePage from './components/HomePage/HomePage';

import cult_fond_logo from './images/CultFond.svg';
import user_profile_logo from './images/UserProfile.svg';
import logo_accomp from './images/LogoAccomp.png';
import strunnie_instr from './images/icons/strunnie.svg';
import duhovie_instr from './images/icons/duhovie.svg';
import udarnie_instr from './images/icons/udarnie.svg';
import narodnie_instr from './images/icons/narodnie.svg';
import folqlernie_instr from './images/icons/folqlernie.svg';
import narodniy_vocal from './images/icons/narodniy_vocal.svg';
import academ_vocal from './images/icons/academ_vocal.svg';
import estradnoe from './images/icons/estradnoe.svg';

function App() {
  return (
    <section className="selectPage">
      <div className="selectPage-header">
        <div className="selectPage-header-left">
          <img
            src={cult_fond_logo}
            alt="ПРИ ПОДДЕРЖКЕ ПРЕЗИДЕНТСКОГО ФОНДА КУЛЬТУРНЫХ ИНИЦИАТИВ"
            className="selectPage-header-left-logo"
          />
          <img
            src={cult_fond_logo}
            alt="ПРИ ПОДДЕРЖКЕ ПРЕЗИДЕНТСКОГО ФОНДА КУЛЬТУРНЫХ ИНИЦИАТИВ"
            className="selectPage-header-left-logo"
          />
        </div>
        <div className="selectPage-header-right">
          <img
            src={user_profile_logo}
            alt="Иконка отображения пользователя"
            className="selectPage-header-right-logo"
          />
        </div>
      </div>
      <div className="selectPage-main">
        <img src={logo_accomp} alt="Аккомпанемент для всех" className="selectPage-main-logo" />
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
}

export default App;

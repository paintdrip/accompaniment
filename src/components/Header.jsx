import React from 'react';

import cult_fond_logo from '../images/CultFond.svg';
import user_profile_logo from '../images/UserProfile.svg';

export const Header = () => {
  return (
    <header className="selectPage-header">
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
    </header>
  );
};

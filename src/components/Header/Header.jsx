import React from 'react';

// import cult_fond_logo from '../../images/CultFond.svg';
// import blag_fond_logo from '../../images/BlagFond.svg';

import user_profile_logo from '../../images/UserProfile.svg';
import logo_accomp_full from '../../images/LogoAccompFull.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__center}>
        <img
          src={logo_accomp_full}
          alt="Основной логотип"
          className={styles.header__center__logo}
        />
      </div>
      <div className={styles.header__right}>
        <img
          src={user_profile_logo}
          alt="Иконка отображения пользователя"
          className={styles.header__right__logo}
        />
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-page__main">
        <h1 className="not-found-page__main__text">Произошла ошибка 😔</h1>
        <Link to="/">
          <button className="not-found-page__main__btn">Вернуться на главную</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

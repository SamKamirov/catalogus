import React from 'react';
import { Filters } from './filters-list/filters-list';

const renderSearchInfo = () => {
  return (
    <div className="search__info">
      <h1 className="search__title">Где поесть?</h1>
      <p className="search__text">
        Заботливо собрали данные для вас и актуализируем их каждый месяц
      </p>
    </div>
  );
};

export const Search = ({ isSearchScrolled, setSearchQuery }) => {
  const onSearchChange = (evt) => setSearchQuery(evt.target.value);
  return (
    <article
      className={`search background-wrapper ${isSearchScrolled ? 'search--scrolled' : ''}`}
    >
      {!isSearchScrolled && renderSearchInfo()}
      <span className="search__input--wrapper">
        <input
          type="text"
          name="search__input"
          className="search__input"
          placeholder="Введи, что ищешь"
          onChange={onSearchChange}
        />
      </span>
      <Filters />
    </article>
  );
};

import React, { } from "react"
import { Filters } from "./filters-list/filters-list"
import { useDispatch } from "react-redux"
import { setFilter } from "../store/action"

const renderSearchInfo = () => {
  return (
    <div className="search__info">
      <h1 className="search__title">Где поесть?</h1>
      <p className="search__text">
        Заботливо собрали данные для вас и актуализируем их каждый месяц
      </p>
    </div>
  )
}

export const Search = ({ isSearchScrolled }) => {
  const dispatch = useDispatch();
  // if (!isSearchScrolled) dispatch(setFilter(null))

  return (
    <article className={`search background-wrapper ${isSearchScrolled ? 'search--scrolled' : ''}`}>
      {!isSearchScrolled && renderSearchInfo()}
      <span className="search__input--wrapper">
        <input
          type="text"
          name="search__input"
          className="search__input"
          placeholder="Введи, что ищешь"
        />
      </span>
      <Filters />
    </article>
  )
}

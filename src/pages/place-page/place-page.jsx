import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPlaces } from "../../vendor/places";
import { NotFoundPage } from "../not-found/not-found-page";
import { createPortal } from "react-dom";
import { ReturnButon } from "../../components/return-button/return-button";

const renderPhones = (phone) => {
  if (!Array.isArray(phone)) return <li><a className="info__item-text" href={`tel:${phone}`} target="_blank">{phone}</a></li>
  return phone.map((item, index) => <li key={index}><a className="info__item-text" href={`tel:${item}`} target="_blank" key={index}>{item}</a></li>)
}

const renderWorkTime = (workTime) => {
  return workTime
    .map((item, index) => {
      if (Array.isArray(item) && item.length > 1) {
        return <p className="info__item-text" key={index}>{item[0]} {item[1]}</p>;
      }

      return <p className="info__item-text" key={item}>{item}</p>;
    })
}

export const PlacePage = () => {
  const { id } = useParams();

  const places = getPlaces();
  const filteredPlace = places.find((place) => place.id == id)

  useEffect(() => {
    if (!filteredPlace) return <NotFoundPage />
  }, [])

  const { name, address, logo, location, workTime, website, phone } = filteredPlace

  const header = document.querySelector('header')

  return (
    <article className="background-wrapper">
      {createPortal(<ReturnButon />, header)}
      <div className="place">
        <span className="place__image--wrapper">
          <img src={logo} className="place-image" />
        </span>
        <h1 className="place-title">{name}</h1>
        <ul className="info">
          <li className="info__item">
            <span className="info__item-title-wrapper">
              <img src="/images/map-icon.png" alt="" className="info__item-icon" />
              <h3 className="info__item-title">Адрес</h3>
            </span>
            {location ? <a href={`https://maps.google.com/maps?daddr=<${location.latitude}>,<${location.longitude}>&amp;ll=`} target="_blank" className="info__item-text address">{address}</a> : <p className="info__item-text address">{address}</p>}
          </li>
          <li className="info__item work-time">
            <span className="info__item-title-wrapper">
              <img src="/images/time.png" alt="" className="info__item-icon" />
              <h3 className="info__item-title">Часы работы</h3>
            </span>
            {renderWorkTime(workTime)}
          </li>
          <li className="info__item contacts">
            <span className="info__item-title-wrapper">
              <img src="/images/phone.png" alt="" className="info__item-icon" />
              <h3 className="info__item-title">Контакты</h3>
            </span>
            <ul className="contacts-list">
              {renderPhones(phone)}
            </ul>
            {website && <a className="info__item-text" href={website} target="_blank">{website}</a>}
          </li>
        </ul>
      </div>
    </article>
  )
}

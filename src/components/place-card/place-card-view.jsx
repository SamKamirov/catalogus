import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import { current } from '@reduxjs/toolkit';

const renderAddressTemplate = (address, index) => (
  <p className="place__address" key={index}>
    {address}
  </p>
);

const renderAddresses = (addresses) =>
  Array.isArray(addresses)
    ? addresses.map((item, index) => renderAddressTemplate(item, index))
    : renderAddressTemplate(addresses);

function checkIsPlaceOpened(name, weekTime) {
  const today = dayjs().format('ddd');
  const currentHour = Number(dayjs().format('HH'));
  const currentMinutes = dayjs().minute();
  const placeCurrentWorkTime = weekTime[today];
  console.log(placeCurrentWorkTime);

  if (placeCurrentWorkTime === 'Закрыто') return [false, `Закрыто`];

  if (placeCurrentWorkTime === 'Круглосуточно') return [true, 'Открыто'];

  const placeStartWorkHour = Number(
    placeCurrentWorkTime.startWork.split(':')[0],
  );
  let placeEndWorkHour = Number(placeCurrentWorkTime.endWork.split(':')[0]);

  const placeStartWorkMinutes = Number(
    placeCurrentWorkTime.startWork.split(':')[1],
  );
  const placeEndWorkMinutes = Number(
    placeCurrentWorkTime.endWork.split(':')[1],
  );

  if (currentHour === placeStartWorkHour) {
    if (currentMinutes > placeStartWorkMinutes) {
      return [true, `Открыто до ${placeEndWorkHour}`];
    }
  }

  if (currentHour === placeEndWorkHour) {
    if (currentMinutes > placeEndWorkMinutes) {
      return [false, `Закрыто`];
    }
  }

  if (currentHour >= placeStartWorkHour && currentHour < placeEndWorkHour)
    return [true, `Открыто до ${placeCurrentWorkTime.endWork}`];

  return [false, 'Закрыто'];
}

export const PlaceCardView = ({ place }) => {
  const { id, name, address, photo, weekTime } = place;

  const [isPlaceOpened, dataText] = checkIsPlaceOpened(name, weekTime);

  return (
    <li
      className={`place place__card ${isPlaceOpened ? 'place__card--opened' : 'place__card--closed'}`}
    >
      <Link className="place__link" to={`place/${id}`}>
        <span className={`place-card__image--wrapper`} data-before={dataText}>
          <img src={photo} alt="place-image" className="place__image" />
        </span>
        <h3 className="place__title">{name}</h3>
        {renderAddresses(address)}
      </Link>
    </li>
  );
};

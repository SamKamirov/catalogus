import React from "react";
import { Link } from "react-router-dom";

const renderAddressTemplate = (address, index) => <p className="place__address" key={index}>{address}</p>

const renderAddresses = (addresses) => Array.isArray(addresses) ? addresses.map((item, index) => renderAddressTemplate(item, index)) : renderAddressTemplate(addresses)

export const PlaceCardView = ({ place }) => {
  const { id, name, address, photo } = place

  return (
    <li className="place place__card">
      <Link className="place__link" to={`place/${id}`}>
        <span className="place-card__image--wrapper">
          <img src={photo} alt="place-image" className="place__image" />
        </span>
        <h3 className="place__title">{name}</h3>
        {renderAddresses(address)}
      </Link>
    </li>
  )
}

import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const ReturnButon = () => {
  return (
    <span className="return-button__wrapper">
      <Link to={'/'} className="return-button">
        <img src="/images/back-button.png" className="return-button__icon" />
      </Link>
    </span>
  )
}

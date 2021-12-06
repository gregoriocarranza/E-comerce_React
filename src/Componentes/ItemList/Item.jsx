import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./index.css";

function ServiceCard({ prod }) {
  return (
    <Fragment>
      <Link to={`/productos/${prod.id}`} className="productCard-link">
        <li className="productCard">
          <h2 className="productCard-child">{prod.name}</h2>
          <small className="productCard-child">{prod.brand}</small>
          <img
            className="prodPic productCard-child"
            src={prod.imgUrl}
            alt={prod.name}
          />

          <b className="productCard-child">${prod.price}</b>
        </li>
      </Link>
    </Fragment>
  );
}

export default ServiceCard;

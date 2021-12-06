import React from "react";
import { Fragment } from "react";

import BtnCompra from "../Compras/BtnCompra";

import "./index.css";

function ItemDetail({ objDetail }) {
  const { id, name, brand, imgUrl, detail, price } = objDetail;
  return (
    <Fragment>
      <li className="DetailCard">
        <section className="sectioDetailDerecha">
          <h2 className="DetailCard-child DetailTitle">{name}</h2>
          <img className="detailPic DetailCard-child" src={imgUrl} alt={name} />
        </section>

        <section className="sectioDetailIzquierda">
          <small className="DetailCard-child brand">
            <b>Marca: </b>
            {brand}
          </small>
          <p className="DetailCard-child detail">{detail}</p>
          <b className="DetailCard-child price">${price}</b>
          <BtnCompra producto={objDetail} productoID={id} />
        </section>
        
      </li>
    </Fragment>
  );
}

export default ItemDetail;

import { Fragment } from "react";
import BtnEliminar from "../Compras/BtnEliminar";

import "./index.css";
function CarritoItemDropdown({ prod }) {
  const { name, brand, imgUrl, price, cantidad } = prod;
  return (
    <Fragment>
      <section className="dropdown_cart-card">
        <img
          className="ImgCartDropdown Childe_drop_cart-card"
          src={imgUrl}
          alt="name"
        />
        <section className="details_dropdown_cart-card">
          <section>
            <h1 className="titleDropdown Childe_drop_cart-card">{name}</h1>
            <p className="brandDropdown Childe_drop_cart-card">
              <b>Marca: </b>
              {brand}
            </p>
          </section>
        </section>
        <section className="buy_Dropdown_cart-card">
          <b className="precioDropdown Childe_drop_cart-card">
            {cantidad}X $ {price}
          </b>
          <BtnEliminar
            producto={prod}
            className="BtnEliminarDropdown"
            className2="btneliminardropdown"
          />
        </section>
      </section>
    </Fragment>
  );
}

export default CarritoItemDropdown;

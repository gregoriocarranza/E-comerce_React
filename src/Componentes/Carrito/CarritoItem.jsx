import { Fragment } from "react";
import BtnEliminar from "../Compras/BtnEliminar";
import { Link } from "react-router-dom";
import "./index.css";
function CarritoItem({ cart }) {
  const { id, name, brand, imgUrl, detail, price, cantidad } = cart;
  return (
    <Fragment>
      <section className="prod_cart-card">
        <img className="ImgCart Childe_cart-card" src={imgUrl} alt="name" />
        <section className="details_prod_cart-card">
          <section>
            <Link to={`/productos/${id}`}>
              <h1 className="title Childe_cart-card">{name}</h1>
            </Link>
            <p className="brand Childe_cart-card">
              <b>Marca: </b>
              {brand}
            </p>
            <div className="detail Childe_cart-card">{detail}</div>
          </section>
        </section>
        <section className="buy_prod_cart-card">
          <small>
            <b className="precio Childe_cart-card">
              {cantidad} Unidades por $ {price} <br />
              <small>Total de este item: ${cantidad * price}</small>
            </b>
          </small>
          <BtnEliminar
            producto={cart}
            className="BtnEliminar"
            className2="btneliminar"
          />
        </section>
      </section>
    </Fragment>
  );
}

export default CarritoItem;

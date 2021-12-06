import { Fragment } from "react";
import BtnEliminar from "../Compras/BtnEliminar";
import { Link } from "react-router-dom";
import "./index.css";
function CarritoItem({ prod }) {
  const { id, name, brand, imgUrl, detail, price, cantidad } = prod;
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
          <b className="precio Childe_cart-card">
            {cantidad}X $ {price}
          </b>
          <BtnEliminar producto={prod} className="BtnEliminar" className2="btneliminar" />
        </section>
      </section>
    </Fragment>
  );
}

export default CarritoItem;

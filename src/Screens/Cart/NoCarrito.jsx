import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Index.css";
function NoCarrito() {
  return (
    <Fragment>
      <section className="Opss">
        <h1>No tienes items agregados en tu carrito</h1>
        <h3>
          Desea agregar productos?
          <Link to="/productos">
            <b> haga click Aqui </b>
          </Link>
        </h3>
      </section>
    </Fragment>
  );
}

export default NoCarrito;

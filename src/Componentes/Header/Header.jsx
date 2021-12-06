import { Fragment } from "react";
import { Link } from "react-router-dom";

import User from "./User";
import Cart from "./Cart";
import "./index.css";
function Header() {
  return (
    <Fragment>
      <div className="divHeader">
        <Link to="/" className="sectionImg">
          <img className="logoCirculo" src="/img/LogoCirculo.png" alt="Logo" />
          <img className="logoPalabra" src="/img/Derivalogo.png" alt="Logo" />
        </Link>

        <section className="sectionLinks">
          <section className="linksC">
            <User />
            <Cart />
          </section>
          <section className="linksA">
            <Link to="/">Home</Link>
            <Link to="/productos">Nuestros Productos</Link>
            <Link to="/aboutUs">Sobre Nosotros</Link>
          </section>
        </section>
      </div>
    </Fragment>
  );
}

export default Header;

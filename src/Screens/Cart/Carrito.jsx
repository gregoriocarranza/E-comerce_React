import { Fragment, useContext } from "react";
import Carrito from "../../Componentes/Carrito/Carrito";
import { ContextWeb, useVarCarrito } from "../../Context/Context";

import NoCarrito from "./NoCarrito";

function CarritoScreen() {
  // const isCarrito = useContext(ContextWeb);
  const cartList = useVarCarrito();
  return (
    <Fragment>
      {cartList.length === 0 && <NoCarrito />}
      {cartList.length > 0 && (
        <Fragment>
          <h1 className="Title">Carrito</h1>
          <Carrito />
        </Fragment>
      )}
    </Fragment>
  );
}

export default CarritoScreen;

import { Fragment, useContext } from "react";
import Carrito from "../../Componentes/Carrito/Carrito";
import { ContextWeb, useVarCarrito } from "../../Context/Context";

function CarritoScreen() {
  const isCarrito = useContext(ContextWeb);
  console.log(isCarrito);
  return (
    <Fragment>
      <Fragment>
        <h1 className="Title">Carrito</h1>
        <Carrito />
      </Fragment>
    </Fragment>
  );
}

export default CarritoScreen;

import { Fragment, useContext } from "react";
import Carrito from "../../Componentes/Carrito/Carrito";
import { ContextWeb, useVarCarrito } from "../../Context/Context";
import opss from "./Opss.jsx";
function CarritoScreen() {
  const isCarrito = useContext(ContextWeb);
  console.log(isCarrito)
  return (
    <Fragment>
      {isCarrito ? (
        <opss />
      ) : (
        <Fragment>
          <h1 className="Title">Carrito</h1>
          <Carrito />
        </Fragment>
      )}
      {/* <h1 className="Title">Carrito</h1>
      <Carrito /> */}
    </Fragment>
  );
}

export default CarritoScreen;

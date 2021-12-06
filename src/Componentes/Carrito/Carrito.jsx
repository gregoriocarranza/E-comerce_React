import { Fragment } from "react";
import Context, { useVarCarrito, useSetCarrito } from "../../Context/Context";

import CarritoItem from "./CarritoItem";

function Carrito() {
  const cartList = useVarCarrito();
  console.log(cartList)
  return (
    <Fragment>
      {cartList.map((u) => (
        <CarritoItem key={u.id} prod={u} />
      ))}
    </Fragment>
  );
}
export default Carrito;

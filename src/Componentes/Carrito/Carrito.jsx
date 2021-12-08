import { Fragment, useContext } from "react";
import {ContextWeb,useVarCarrito, useVarTotal } from "../../Context/Context";

import CarritoItem from "./CarritoItem";

function Carrito() {
  const cartList = useVarCarrito();
  const total = useVarTotal();
  console.log(total)
  // console.log(cartList);
  return (
    <Fragment>
      {cartList.map((u) => (
        <CarritoItem key={u.id} cart={u} cartCant={cartList.length} />
      ))}
      <section className="Pay_footer">Total de tu compra: ${total}</section>
    </Fragment>
  );
}
export default Carrito;

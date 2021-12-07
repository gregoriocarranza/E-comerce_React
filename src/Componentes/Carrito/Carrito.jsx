import { Fragment } from "react";
import Context, { useVarCarrito, useSetCarrito } from "../../Context/Context";

import CarritoItem from "./CarritoItem";
import Opps from "../../Screens/Cart/Opss";


function Carrito() {
  const cartList = useVarCarrito();
  console.log(cartList);
  return (
    <Fragment>
      {cartList.length === 0 && <Opps />}
      {cartList.length > 0 &&(
        cartList.map((u) => (
          <CarritoItem key={u.id} cart={u} cartCant={cartList.length} />
        )))}
    </Fragment>
  );
}
export default Carrito;

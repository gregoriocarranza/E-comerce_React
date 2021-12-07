import { Fragment } from "react";
import CarritoItemDropdown from "./CarritoItemDropdown";
import { useVarCarrito } from "../../Context/Context";
import { Link } from "react-router-dom";

function Cart() {
  const cartList = useVarCarrito();
  console.log(cartList.length);
  return (
    <Fragment>
      {cartList.length === 0 && ""}
      {cartList.length > 0 && (
        <section className="cart-icon" hidden={cartList.length === 0}>
          <Link to="/carrito">
            <i className="fas fa-shopping-cart "></i>
          </Link>
          <section className="cart-dropdown">
            {cartList.map((u) => (
              <CarritoItemDropdown key={u.id} prod={u} />
            ))}
          </section>
        </section>
      )}
    </Fragment>
  );
}
export default Cart;

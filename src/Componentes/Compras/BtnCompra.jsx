import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useSetCarrito } from "../../Context/Context";
import "./index.css";
function BtnCompra({ producto, productoID }) {
  const setCarrito = useSetCarrito();
  const [cantidad, setCantidad] = useState(0);
  const [irCarrito, setIrCarrito] = useState(false);
  const { stock } = producto;
  // console.log(stock);
  return (
    <Fragment>
      {irCarrito ? (
        <section className="BtnComprar">
          <Link to="/carrito">Terminar compra</Link>
        </section>
      ) : (
        <section className="BtnComprar">
          <article className="BtnContador Btn">
            <button
              className="btnInputC "
              onClick={() => {
                setCantidad(cantidad - 1);
              }}
              disabled={cantidad === 0}
            >
              -
            </button>
            <b className="Contador">{cantidad}</b>
            <button
              className="btnInputC"
              onClick={() => {
                setCantidad(cantidad + 1);
              }}
              disabled={cantidad === stock}
            >
              +
            </button>
          </article>
          <button
            className="btncompra Btn"
            disabled={cantidad === 0}
            onClick={() => {
              setIrCarrito(true);
              setCarrito(producto, cantidad);
            }}
          >
            Comprar ahora
          </button>
        </section>
      )}
    </Fragment>
  );
}
export default BtnCompra;

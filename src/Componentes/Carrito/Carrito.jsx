import React, { Fragment, useContext, useState } from "react";
import ProductContext, {
  useVarCarrito,
  useVarTotal,
} from "../../Context/Context";
import { addDoc, collection, doc } from "firebase/firestore";
import db from "../../Js/firebaseInit";

import CarritoItem from "./CarritoItem";
import "./index.css";
function Carrito() {
  const cartList = useVarCarrito();
  const total = useVarTotal();

  const formRef = React.useRef();

  const [terminarCompra, setTerminarCompra] = useState(false);
  const [error, setError] = useState(false);

  const TerminarCompra = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const Comprador = Object.fromEntries(formData);
    if (Comprador.Email === Comprador.Email2) {
      console.log(Comprador);
      delete Comprador.Email2;
      const momentoActual = new Date();
      const Data = {
        Date: momentoActual,
        Comprador,
        Compra: cartList,
        Total: total,
      };
      console.log(Data);
      addDoc(collection(db, "Compras_finalizadas"), Data);
    } else {
      setError(!error);
    }

    // cartList.map((prod) => addDoc(collection(db, "Compras"), prod));
  };

  return (
    <Fragment>
      {terminarCompra ? (
        <Fragment>
          <div className="Confimracion">
            <section className="confirmText">
              {error ? <div>EL MAIL NO COINCIDE</div> : ""}
              <h2>Esta seguro que desea confirmar la compra?</h2>
              <p>Si desea continuar ingrese sus datos</p>
            </section>

            <form
              action=""
              onSubmit={TerminarCompra}
              className="endForm"
              ref={formRef}
            >
              <input
                type="text"
                name="Name"
                id="Name"
                placeholder="Nombre de usuario"
              />
              <input
                type="email"
                name="Email"
                id="Email"
                placeholder="Email de contacto"
              />
              <input
                type="email"
                name="Email2"
                id="Email2"
                placeholder="Repita su email"
              />
              <input
                type="tel"
                name="Phone"
                id="Phone"
                placeholder="Telefono de contacto"
              />
              <button type="submit">Realizar compra</button>
            </form>

            <div className="btnFin">
              <button
                onClick={() => {
                  setTerminarCompra(!terminarCompra);
                }}
              >
                <small>Cancelar Compra</small>
              </button>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {cartList.map((u) => (
            <CarritoItem key={u.id} cart={u} cartCant={cartList.length} />
          ))}
          <div className="btnFin">
            <button
              onClick={() => {
                setTerminarCompra(!terminarCompra);
              }}
            >
              Terminar Compra
            </button>
          </div>
          <section className="Pay_footer">Total de tu compra: ${total}</section>
        </Fragment>
      )}
    </Fragment>
  );
}
export default Carrito;

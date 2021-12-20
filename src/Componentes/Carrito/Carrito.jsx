import React, { Fragment, useContext, useState } from "react";
import ProductContext, {
  useVarCarrito,
  useVarTotal,
  useBorrarCarrito,
} from "../../Context/Context";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import db from "../../Js/firebaseInit";

import CarritoItem from "./CarritoItem";
import "./index.css";
function Carrito() {
  const cartList = useVarCarrito();
  const total = useVarTotal();
  const BorrarCarrito = useBorrarCarrito();
  const formRef = React.useRef();

  const [terminarCompra, setTerminarCompra] = useState(false);
  const [mostrarDatos, setMostrarDatos] = useState(false);
  const [mError, setMError] = useState(false);
  const [comprador, setComprador] = useState([]);
  const [compId, setCompId] = useState([]);

  const TerminarCompra = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const Comprador = Object.fromEntries(formData);
    setComprador(Comprador);
    if (
      Comprador.Name === "" ||
      Comprador.Email === "" ||
      Comprador.Email2 === "" ||
      Comprador.Phone === ""
    ) {
      setMError(!mError);
      console.log(mError);
      setTimeout(() => {
        setMError(!mError);
        console.log(mError);
      }, 3000);
    } else {
      if (Comprador.Email === Comprador.Email2) {
        // console.log(Comprador);
        delete Comprador.Email2;
        const momentoActual = new Date();
        const data = {
          Date: momentoActual,
          Comprador,
          Compra: cartList,
          Total: total,
        };

        addDoc(collection(db, "Compras_finalizadas"), data).then(({ id }) => {
          const ref = doc(db, "Compras_finalizadas", id);
          updateDoc(ref, { idComprador: id });
          setCompId(id);
        });

        setMostrarDatos(!mostrarDatos);
      } else {
        setMError(!mError);
      }
    }

    // cartList.map((prod) => addDoc(collection(db, "Compras"), prod));
  };

  return (
    <Fragment>
      {mostrarDatos ? (
        <section className="datosComprador">
          <h1 className="compChildren">
            Realizaste una compra con los siguientes datos
          </h1>
          {(console.log(comprador), console.log(compId))}
          <h2 className="compChildren">Nombre: {comprador.Name}</h2>
          <h3 className="compChildren">Email: {comprador.Email}</h3>
          <p className="compChildren">Telefono: {comprador.Phone}</p>
          <br />
          <br />

          <small className="compChildren">
            <code>ID de compra: {compId}</code>
          </small>
          <br />
          <button
            className="compChildren"
            onClick={() => {
              setMostrarDatos(!mostrarDatos);
              setTerminarCompra(!terminarCompra);
              BorrarCarrito();
            }}
          >
            Gracias!
          </button>
        </section>
      ) : (
        <Fragment>
          {terminarCompra ? (
            <Fragment>
              <div className="Confimracion">
                <section className="confirmText">
                  {mError ? (
                    <div>
                      Algunos de los datos ingresados no es correcto, chequee si
                      el Email es igual
                    </div>
                  ) : (
                    ""
                  )}
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
              <section className="Pay_footer">
                Total de tu compra: ${total}
              </section>
            </Fragment>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
export default Carrito;

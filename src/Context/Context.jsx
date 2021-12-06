import React, { useContext, useState } from "react";

const Context = React.createContext();

export function ContextWeb({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [isCarrito, setIsCarrito] = useState(false);

  const IsOncart = (producto) => {
    // console.log(carrito);
    return carrito?.findIndex((u) => u.id === producto.id);
  };
  const AgregarProducto = (producto) => {
    setIsCarrito(true)
    if (IsOncart(producto) === -1) {
      setCarrito(carrito.concat(producto));
    } else {
      alert("ya incluido");
    }
    // console.log(producto);
  };

  const FEliminarProducto = (producto) => {
    setCarrito(carrito.filter((u) => u.id !== producto.id));
    // console.log(producto);
  };

  return (
    <Context.Provider value={{ carrito, AgregarProducto, FEliminarProducto,isCarrito }}>
      {children}
    </Context.Provider>
  );
}

export function useEliminarCarrito() {
  return useContext(Context).FEliminarProducto;
}
export function useVarCarrito() {
  return useContext(Context).carrito;
}
export function useSetCarrito() {
  return useContext(Context).AgregarProducto;
}
export default Context;

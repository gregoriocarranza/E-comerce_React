import React, { useContext, useState } from "react";

const Context = React.createContext();

export function ContextWeb({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [isCarrito, setIsCarrito] = useState(false);
  const [total, setTotal] = useState(0);

  const agregarProducto = (producto, cantidad) => {
    const check = carrito.find((u) => u.id === producto.id);
    setIsCarrito(true);
    console.log(carrito);
    if (!check) {
      setCarrito(
        carrito.concat({
          ...producto,
          cantidad: cantidad,
          subtotal: producto.price * cantidad,
        })
      );
      setTotal(total + producto.price * cantidad);
    } else {
      const cartAux = carrito.map((u) => {
        if (u.id === producto.id) {
          u.cantidad += cantidad;
          u.subtotal += producto.price * cantidad;
        }
        return u;
      });
      setCarrito(cartAux);
      setTotal(total + producto.price * cantidad);
    }
    console.log(total);
  };

  const fEliminarProducto = (producto) => {
    const ElimItem = carrito.find((u) => u.id === producto.id);
    setTotal(total - ElimItem.subtotal);
    setCarrito(carrito.filter((u) => u.id !== producto.id));

    // console.log(producto);
  };

  return (
    <Context.Provider
      value={{ carrito, agregarProducto, fEliminarProducto, isCarrito, total }}
    >
      {children}
    </Context.Provider>
  );
}

export function useEliminarCarrito() {
  return useContext(Context).fEliminarProducto;
}
export function useVarCarrito() {
  return useContext(Context).carrito;
}
export function useVarTotal() {
  return useContext(Context).total;
}

export function useSetCarrito() {
  return useContext(Context).agregarProducto;
}
export default Context;

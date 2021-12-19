import React, { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import db from "../Js/firebaseInit";
import { calculateBackoffMillis } from "@firebase/util";
const ProductContext = React.createContext();

export function ContextWeb({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [isCarrito, setIsCarrito] = useState(false);
  const [addCart, setAddCart] = useState(false);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    const ref = collection(db, "Carrito");
    getDocs(ref).then((data) => {
      setCarrito(data.docs.map((u) => ({ ...u.data() })));
      // , id: u.id
    });
  }, [addCart]);

  const agregarProducto = (producto, cantidad) => {
    setAddCart(!addCart);

    const check = carrito.find((u) => u.id === producto.id);
    setIsCarrito(true);

    if (!check) {
      const toAdd = {
        ...producto,
        cantidad,
        subtotal: producto.price * cantidad,
      };

      addDoc(collection(db, "Carrito"), toAdd).then(({ id }) => {
        const ref = doc(db, "Carrito", id);

        updateDoc(ref, { SecId: id, cantidad: cantidad });
      });
      console.log(producto)
     console.log(producto.price)
     console.log(cantidad)
      setTotal(total + producto.price * cantidad);
    } else {
      const ref = carrito.find((u) => u.id === producto.id);
      // console.log(ref.id);
      // console.log(producto.id);
      // console.log(ref.SecId)
      const toUpdate = doc(db, "Carrito", ref.SecId);
      updateDoc(toUpdate, {
        cantidad: ref.cantidad + cantidad,
      });

      setTotal(total + producto.price * cantidad);

      return;
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
    <ProductContext.Provider
      value={{
        carrito,
        agregarProducto,
        fEliminarProducto,
        isCarrito,
        total,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContext;

export function useEliminarCarrito() {
  return useContext(ProductContext).fEliminarProducto;
}
export function useVarCarrito() {
  return useContext(ProductContext).carrito;
}
export function useVarTotal() {
  return useContext(ProductContext).total;
}

export function useSetCarrito() {
  return useContext(ProductContext).agregarProducto;
}

import React, { useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import db from "../Js/firebaseInit";
import { calculateBackoffMillis } from "@firebase/util";
const ProductContext = React.createContext();

export function ContextWeb({ children }) {
  const [carrito, setCarrito] = useState([]);
  const [isCarrito, setIsCarrito] = useState(false);
  const [addCart, setAddCart] = useState(false);
  const [reload, setReload] = useState(false);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    const ref = collection(db, "Carrito");
    getDocs(ref).then((data) => {
      setCarrito(data.docs.map((u) => ({ ...u.data() })));

      const myTotal = data.docs.reduce(
        (acumulador, valor) => acumulador + valor.data().subtotal,
        0
      );
      setTotal(myTotal);
    });
  }, [reload]);

  const agregarProducto = async (producto, cantidad) => {
    setAddCart(!addCart);

    const check = carrito.find((u) => u.id === producto.id);
    setIsCarrito(true);

    if (!check) {
      const toAdd = {
        ...producto,
        cantidad,
        subtotal: producto.price * cantidad,
      };

      const { id } = await addDoc(collection(db, "Carrito"), toAdd);
      console.log("ID QUE VINO", id);
      const ref = doc(db, "Carrito", id);
      await updateDoc(ref, { SecId: id, cantidad: cantidad });
      setReload(!reload);
    } else {
      const ref = carrito.find((u) => u.id === producto.id);
      const toUpdate = doc(db, "Carrito", ref.SecId);
      await updateDoc(toUpdate, {
        cantidad: ref.cantidad + cantidad,
      });
      setReload(!reload);
      return;
    }
  };
  const BorrarCarrito = () => {
    console.log("CarritoBorrado");
    carrito.map((u) => {
      console.log(u.id);
      deleteDoc(doc(db, "Carrito", u.SecId));
      setReload(!reload);
    });
  };
  const fEliminarProducto = (producto) => {
    console.log("Quedo");
    const ref = carrito.find((u) => u.id === producto.id);

    deleteDoc(doc(db, "Carrito", ref.SecId));
    setReload(!reload);
    // const ElimItem = carrito.find((u) => u.id === producto.id);
    // setTotal(total - ElimItem.subtotal);
    // setCarrito(carrito.filter((u) => u.id !== producto.id));
  };

  return (
    <ProductContext.Provider
      value={{
        carrito,
        agregarProducto,
        fEliminarProducto,
        isCarrito,
        total,
        BorrarCarrito,
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
export function useBorrarCarrito() {
  return useContext(ProductContext).BorrarCarrito;
}

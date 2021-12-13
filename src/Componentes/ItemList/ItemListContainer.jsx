import { Fragment, useEffect, useState } from "react";
import { products } from "../../Js/dataBase";
import db from "../../Js/firebaseInit";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";

import Categorias from "./Ordenamiento/Categorias.jsx";
import ItemList from "./ItemList";
import Marcas from "./Ordenamiento/Marcas";

function ItemListContainer() {
  const [objArray, setobjArray] = useState([]);
  let [displayCategorias, setDisplayCategorias] = useState(false);
  let [displayMarcas, setDisplayMarcas] = useState(false);
  const { catId } = useParams();

  useEffect(() => {
    const list = catId
      ? query(collection(db, "Productos"), where("categ", "==", Math.floor(catId)))
      : collection(db, "Productos");

    getDocs(list).then((respuesta) => {
      const arrayProd = respuesta.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setobjArray(arrayProd);
    });
  }, [catId]);

  return (
    <Fragment>
      <article className="ItemListContainer">
        <section className="botonesProcuts">
          <div
            className="CategoriaBtn"
            onClick={() => {
              setDisplayCategorias(!displayCategorias);
            }}
          >
            Categorias
          </div>
          {displayCategorias ? <Categorias /> : ""}

          <div
            className="CategoriaBtn"
            onClick={() => {
              setDisplayMarcas(!displayMarcas);
            }}
          >
            Marcas
          </div>
          {displayMarcas ? <Marcas /> : ""}
          <div className="CategoriaBtn">Precio</div>
        </section>

        <section className="productosList">
          <ItemList objArray={objArray} />
        </section>
      </article>
    </Fragment>
  );
}

export default ItemListContainer;

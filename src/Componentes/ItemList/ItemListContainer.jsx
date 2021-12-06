import { Fragment, useEffect, useState } from "react";
import { products } from "../../Js/dataBase";
import { useParams } from "react-router-dom";

import Categorias from "./Ordenamiento/Categorias.jsx";
import ItemList from "./ItemList";
import Marcas from "./Ordenamiento/Marcas";

function ItemListContainer() {
  const [objArray, setobjArray] = useState([]);
  let [displayCategorias, setDisplayCategorias] = useState(false);
  let [displayMarcas, setDisplayMarcas] = useState(false);
  const { catId } = useParams();

  useEffect(() => {
    const productos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 100);
    });

    productos.then(
      (result) => {
        // console.log(Math.floor(catId));
        setobjArray(result.filter((u) => u.categ === Math.floor(catId)));
        if (catId === undefined) {
          setobjArray(result);
          // console.log(catId);
        }
      },
      (err) => {
        console.log("Error");
      }
    );
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

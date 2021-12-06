import { Fragment, useEffect, useState } from "react";
import { products } from "../../Js/dataBase";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

function ItemListDetail() {
  const [objDetail, setObjDetail] = useState([]);

  const { productId } = useParams();
  useEffect(() => {
    const productos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 100);
    });

    productos.then(
      (result) => {
        // console.log(Math.floor(productId));

        setObjDetail(result.find((u) => u.id === Math.floor(productId)));
      },
      (err) => {
        console.log("Error");
      }
    );
  }, [productId]);

  return (
    <Fragment>
      <article className="ItemDetailContainer">
        <section className="productosList">
          <ItemDetail objDetail={objDetail} />
        </section>
      </article>
    </Fragment>
  );
}

export default ItemListDetail;

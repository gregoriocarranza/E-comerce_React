import { Fragment, useEffect, useState } from "react";
import { products } from "../../Js/dataBase";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";

import db from "../../Js/firebaseInit";
import ItemDetail from "./ItemDetail";

function ItemListDetail() {
  const [objDetail, setObjDetail] = useState([]);

  const { productId } = useParams();

  useEffect(() => {
    const detailList = doc(db, "Productos", productId);
    getDoc(detailList).then((respuesta) => {
      const arrayDetail = { ...respuesta.data(), id: respuesta.id };
      setObjDetail(arrayDetail);
    });
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

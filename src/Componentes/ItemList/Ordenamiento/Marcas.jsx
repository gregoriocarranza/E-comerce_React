import { Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../../../Js/dataBase";
import "../index.css";

const Marcas = () => {
  const [marcas, setMarcas] = useState([]);

  return (
    <section className="Category_section">
      {products.map((u) => {
        return (
          <div className="Btn_cat" key={u.id}>
            <Link to={"/marca/" + u.brand} className="btn-cat">
              {u.brand}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Marcas;

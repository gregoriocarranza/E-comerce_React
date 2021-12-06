import { Link } from "react-router-dom";
import { products } from "../../../Js/dataBase";
import "../index.css";

const Marcas = () => {
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

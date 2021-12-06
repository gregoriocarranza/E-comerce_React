import { Link } from "react-router-dom";

import "../index.css";

const Categorias = () => {
  const Categorias = [
    { id: 1, src: "/productos", texto: "Todos los productos" },
    { id: 2, src: "/categoria/1", texto: "Cuchillos De Caza" },
    { id: 3, src: "/categoria/2", texto: "Cuchillos de mesa" },
    { id: 4, src: "/categoria/3", texto: "Cuchillos para Pan" },
    { id: 5, src: "/categoria/4", texto: "Cuchillos para carne" },
  ];
  return (
    <section className="Category_section">
      {Categorias.map((u) => {
        return (
          <div className="Btn_cat" key={u.id}>
            <Link to={u.src} className="btn-cat">
              {u.texto}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default Categorias;
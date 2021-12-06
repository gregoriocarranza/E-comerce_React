import { Fragment } from "react";
import { useEliminarCarrito } from "../../Context/Context";
import "./index.css";

function BTnEliminar({ producto, productoID,className,className2 }) {
  const EliminarProducto = useEliminarCarrito() ;
  console.log(producto);
  // const { id, name, brand, imgUrl, detail, price } = producto;
  return (
    <Fragment>
      <section className={className}>
        <div
          className={className2}
          onClick={() => {
            EliminarProducto(producto);
          }}
        >
          Eliminar Producto
        </div>
      </section>
    </Fragment>
  );
}
export default BTnEliminar;

import { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextWeb } from "./Context/Context";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Screens/Home/Home";
import Carrito from "./Screens/Cart/Carrito.jsx";
import Productos from "./Screens/Catalog/Productos.jsx";
import Usuario from "./Screens/User/User.jsx";
import AboutUs from "./Screens/AboutUs/AboutUs";

import ItemListContainer from "./Componentes/ItemList/ItemListContainer";
import ItemListDetail from "./Componentes/ItemDetail/ItemListDetail";


function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <ContextWeb>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />}></Route>
            <Route path="/aboutUs" element={<AboutUs />}></Route>
            <Route
              path="/productos/:productId"
              element={<ItemListDetail />}
            ></Route>
            <Route path="/categoria/:catId" element={<Productos />}></Route>

            <Route path="/carrito" element={<Carrito />}></Route>
            <Route path="/usuario" element={<Usuario />}></Route>
          </Routes>
          <Footer />
        </ContextWeb>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

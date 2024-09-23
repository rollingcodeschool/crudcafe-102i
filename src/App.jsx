import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Erro404";
import DetalleProducto from "./components/pages/DetalleProducto";
import Login from "./components/pages/Login";
import RutaProtegida from "./components/routes/RutaProtegida";
import RutasAdmin from "./components/routes/RutasAdmin";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem('userKey')) || '';
  const [usuarioLogueado, setUsuarioLogueado] =  useState(usuario)

  return (
    <>
      <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
        <Routes> 
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/detalleproducto" element={<DetalleProducto></DetalleProducto>}></Route>
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route exact path="/administrador/*" element={
            <RutaProtegida>
              <RutasAdmin/>
            </RutaProtegida>
          }></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes> 
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;

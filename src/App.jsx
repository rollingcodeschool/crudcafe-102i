import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Error404 from "./components/pages/Erro404";
import DetalleProducto from "./components/pages/DetalleProducto";

function App() {
  return (
    <>
 
      {/* <Inicio></Inicio> */}
      {/* <Administrador></Administrador> */}
      <BrowserRouter>
      <Menu></Menu>
        {/* <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
         
        </Routes> */}
          <Administrador></Administrador>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;

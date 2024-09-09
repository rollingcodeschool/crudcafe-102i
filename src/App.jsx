import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Administrador from "./components/pages/Administrador";
import Inicio from "./components/pages/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Menu></Menu> */}
      {/* <Inicio></Inicio> */}
      {/* <Administrador></Administrador>
  <Footer></Footer> */}
  <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
        </Routes>
        <Footer></Footer>
  </BrowserRouter>
    </>
  );
}

export default App;

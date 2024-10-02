import { Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "../../helpers/queries";

const Administrador = () => {
  const [listaProductos, setListaProductos] = useState([])

  useEffect(()=>{
    obtenerProductos();
  }, [])

  const obtenerProductos = async()=>{
    const respuesta = await leerProductosAPI()
    console.log(respuesta)
    if(respuesta.status === 200){
      const datos = await respuesta.json();
      setListaProductos(datos);
    }else{
      Swal.fire({
        title: "Ocurrio un error",
        text: `En estos momentos no podemos mostrar los productos, intenta en breve.`,
        icon: "error"
      });
    }
  }
  

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to='/administrador/crear'>
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            listaProductos.map((producto, posicion)=>  <ItemProducto key={producto._id} producto={producto} fila={posicion +1} setListaProductos={setListaProductos}></ItemProducto>)
          }
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;

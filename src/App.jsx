import { useEffect, useState } from "react";
import Formulario from '../components/Formulario.jsx'
import Tabla from "../components/Tabla.jsx";
export default function App() {
  //cargamos los datos guardados en el localStorage
  let listProd = localStorage.getItem('productos');
  let idProd = localStorage.getItem('id');
  let listCtg = localStorage.getItem('categoria');

  // let cat = ['SinCategoria']
  if (listProd !== null) {
    listProd = JSON.parse(listProd);
  } else {
    listProd = [];
  }

  if (idProd !== null) {
    idProd = JSON.parse(idProd);
  } else {
    idProd = 1;
  }

  if (listCtg !== null) {
    listCtg = JSON.parse(listCtg);
  } else {
    listCtg = [];
  }
  //llenado de productos
  const [productos, setProductos] = useState(listProd);
  //ids unicos
  const [id, setId] = useState(idProd)
  //edcion de un productos
  const [productoEdit, setProductoEdit] = useState(null);
  //busqueda
  const [search, setSearch] = useState(productos)
  //btn
  const [status, setStatus] = useState(true);
  //selectHardcodeado
  const [categoria, setCategoria] = useState(listCtg);

  function agregarProducto(producto) {
    setProductos([...productos, producto]);

  }
  function eliminarProducto(idSelected) {
    let listNew = productos.filter(p => p.id !== idSelected);
    setProductos(listNew);
  }

  function editarProducto(idSelected) {
    setProductoEdit(idSelected);
  }

  function actualizarProducto(productoEditado) {
    setProductos(productos.map(x => {
      if (x.id === productoEditado.id) {
        x.name = productoEditado.name;
        x.precio = productoEditado.precio;
        x.cantidad = productoEditado.cantidad;
        x.categoria = productoEditado.categoria;
        return x;
      } else {
        return x;
      }
    }));
  }

  function buscarProductos(value) {
    if (value !== '') {
      setSearch(productos.filter(x => x.name.includes(value)));
    } else {
      setSearch(productos);
    }
  }

  function addCat(value) {
    setCategoria([...categoria, value]);
  }
  function btnStatus() {
    setStatus(!status);
  }
  function setProductEdit() {
    setProductoEdit(null);
  }
  function incrementa() {
    setId(id + 1);
  }

  useEffect(() => {
    localStorage.setItem('categoria', JSON.stringify(categoria));

  }, [categoria]);

  useEffect(() => {
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('id', JSON.stringify(id));
    setSearch(productos);
  }, [productos]);

  return (
    <div className="container">
      <Formulario
        onAdd={agregarProducto}
        id={id} onIncrement={incrementa}
        prodToEdit={productoEdit}
        productos={productos}
        onUpdateP={actualizarProducto}
        onSearch={buscarProductos}
        statusBtn={btnStatus}
        status={status}
        changeStateEdit={setProductEdit}
        selectCat={categoria}
        addCtg={addCat}
      />
      {/* {console.log(Object.keys(productos))} */}
      <Tabla
        productos={search}
        onDelete={eliminarProducto}
        statusBtn={btnStatus}

        onEdit={editarProducto} />
    </div>
  );
}


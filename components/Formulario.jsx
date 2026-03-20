import { useState, useEffect } from "react";

export default function Formulario({ onAdd, id, onIncrement, prodToEdit, productos, onUpdateP, onSearch, statusBtn, status, changeStateEdit, selectCat, addCtg }) {

    useEffect(() => {
        if (prodToEdit !== null) {
            setInputName(prodToEdit.name);
            setInputPrecio(prodToEdit.precio);
            setInputCantidad(prodToEdit.cantidad);
            setOption(prodToEdit.categoria);
        }
    }, [prodToEdit]);
    //busqueda
    const [inputSearch, setInputSearch] = useState('');

    //crear producto
    const [inputName, setInputName] = useState('');
    const [inputPrecio, setInputPrecio] = useState('');
    const [inputCantidad, setInputCantidad] = useState('');
    const [inputCategoria, setInputCategoria] = useState('');

    //estado del option
    const [optionCategoria, setOption] = useState('');

    //estado de visualizacion
    const [showInput, setInputShow] = useState(true);

    function handlerChange(e, setter) {
        setter(e.target.value);
    }

    function changeStatus() {
        setInputShow(!showInput);
    }

    function construye() {
        let producto = {};
        // && inputCategoria !== ''
        if (inputName !== '' && inputPrecio !== '' && inputCantidad !== '' && optionCategoria !== '') {
            producto.name = inputName;
            producto.precio = Number(inputPrecio);
            producto.categoria = optionCategoria;
            producto.cantidad = Number(inputCantidad);
            producto.id = id;
            onIncrement(id);
            onAdd(producto);
            setInputName('');
            setInputPrecio('');
            setInputCantidad('');
            setOption('');
        } else {
            alert("Faltan campos por llemr");
        }
    }

    function actualizar(id) {
        let findProd = productos.find(p => p.id === id);
        if (findProd) {
            // && inputCategoria !== ''
            if (inputName !== '' && inputPrecio !== '' && inputCantidad !== '' && optionCategoria !== '') {
                findProd.name = inputName;
                findProd.precio = Number(inputPrecio);
                findProd.categoria = optionCategoria;
                findProd.cantidad = Number(inputCantidad);
                setInputName('');
                setInputPrecio('');
                setInputCantidad('');
                setOption('');
                onUpdateP(findProd);
                changeStateEdit()

            } else {
                alert("Faltan campos por llemr");
            }
        }
    }
    return (
        <div className="container-formulario">
            <h1>INVENTARIO</h1>
            <label>Buscar</label>
            <input value={inputSearch} onChange={e => { handlerChange(e, setInputSearch); onSearch(e.target.value) }} />
            <label>Nombre</label>
            <input value={inputName} onChange={e => handlerChange(e, setInputName)} />
            <label>Precio</label>
            <input value={inputPrecio} onChange={e => handlerChange(e, setInputPrecio)} />
            <label>Cantidad</label>
            <input value={inputCantidad} onChange={e => handlerChange(e, setInputCantidad)} />
            <label>Categoria</label>

            {/* <button onClick={() => { addCtg(inputCategoria), setInputCategoria('') }}></button> */}
            <section>
                <select value={optionCategoria} onChange={e => { handlerChange(e, setOption) }}>
                    <option value=""></option>
                    {selectCat.map((x) => (
                        <option key={x} value={x}>{x}</option>
                    ))}
                </select>
                {showInput ?
                    (<button onClick={changeStatus}>+</button>)
                    :
                    (<>
                        <button onClick={() => { addCtg(inputCategoria); setInputCategoria(''); changeStatus(); }} >Agregar</button>
                        <input value={inputCategoria} onChange={e => handlerChange(e, setInputCategoria)} />
                    </>)}
            </section>

            {/* <input value={inputCategoria} onChange={e => handlerChange(e, setInputCategoria)} />
            <br /> */}
            {/* <input value={inputCategoria} onChange={e => handlerChange(e, setInputCategoria)} /> */}

            <button className="btn-addProduct" onClick={construye} >
                AGREGAR
            </button>

            <button className="btn-update" onClick={() => { actualizar(prodToEdit.id); statusBtn(); }} disabled={status} >
                Actualizar
            </button>
        </div>
    );
}
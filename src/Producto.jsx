
let arr = [
    { nombre: "Doritos", precio: 13, categoria: "Frituras" },
    { nombre: "Paleta", precio: 3, categoria: "Enbolsado" },
    { nombre: "Agua", precio: 20, categoria: "Enbotellados" }
];

function Producto() {

    return (
        <div>
            <ul>
                {arr.map((x) => (
                    <li key={x.nombre}>{x.nombre}: {x.precio}, {x.categoria}</li>
                ))
                }
            </ul>
        </div>
    );
}

export default Producto;
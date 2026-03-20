export default function Tabla({ productos, onDelete, onEdit, statusBtn }) {
    // console.log(keys);
    return (
        <div className="container-table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Categoria</th>
                        <th className="btn"></th>
                        <th className="btn"></th>

                    </tr>
                </thead>

                <tbody>
                    {productos.map((p) => (
                        <tr key={p.id}>
                            <td>
                                {p.id}
                            </td>
                            <td>
                                {p.name}
                            </td>
                            <td>
                                {p.precio}
                            </td>
                            <td>
                                {p.cantidad}
                            </td>
                            <td>
                                {p.categoria}
                            </td>
                            <td>
                                <button className="btn-delete" onClick={() => onDelete(p.id)}>🗑️</button>
                            </td>
                            <td>
                                <button className="btn-edit" onClick={() => { onEdit(p); statusBtn() }}>✒️</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
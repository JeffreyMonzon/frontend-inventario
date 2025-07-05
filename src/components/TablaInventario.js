function TablaInventario({ items, handleEditar, handleEliminar }) {
  return (
    <div className="mt-8 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Nombre</th>
            <th className="py-2 px-4">Descripción</th>
            <th className="py-2 px-4">Precio</th>
            <th className="py-2 px-4">Cantidad</th>
            <th className="py-2 px-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr
              key={item.id}
              className={idx % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="py-2 px-4 text-sm">{item.id}</td>
              <td className="py-2 px-4 text-sm">{item.nombre}</td>
              <td className="py-2 px-4 text-sm">{item.descripcion}</td>
              <td className="py-2 px-4 text-sm">S/ {item.precio}</td>
              <td className="py-2 px-4 text-sm">{item.cantidad}</td>
              <td className="py-2 px-4 space-x-2">
                <button
                  onClick={() => handleEditar(item)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-2 rounded text-sm transition"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleEliminar(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded text-sm transition"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaInventario;

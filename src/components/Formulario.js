function Formulario({
  nombre,
  descripcion,
  precio,
  cantidad,
  setNombre,
  setDescripcion,
  setPrecio,
  setCantidad,
  modoEdicion,
  handleAgregar,
  handleGuardarCambios,
  limpiarFormulario
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (modoEdicion) {
      handleGuardarCambios();
    } else {
      handleAgregar();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto mt-6 space-y-4 border border-gray-200"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        {modoEdicion ? "Editar Ítem" : "Agregar Nuevo Ítem"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Precio (S/)</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            step="0.01"
            min="0"
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cantidad</label>
          <input
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            min="0"
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {modoEdicion ? "Actualizar" : "Guardar"}
        </button>

        {modoEdicion && (
          <button
            type="button"
            onClick={limpiarFormulario}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400 transition"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default Formulario;

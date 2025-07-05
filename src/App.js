import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import TablaInventario from './components/TablaInventario';
import {
  obtenerItems,
  crearItem,
  actualizarItem,
  eliminarItem
} from './api';

function App() {
  const [items, setItems] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    cargarItems();
  }, []);

  const cargarItems = async () => {
    setLoading(true);
    setError('');
    try {
      const datos = await obtenerItems();
      setItems(datos);
    } catch (err) {
      setError('Error al cargar ítems');
    } finally {
      setLoading(false);
    }
  };

  const limpiarFormulario = () => {
    setNombre('');
    setDescripcion('');
    setPrecio('');
    setCantidad('');
    setModoEdicion(false);
    setIdEditando(null);
  };

  const handleAgregar = async () => {
    if (!nombre || !descripcion || !precio || !cantidad) {
      alert('Completa todos los campos');
      return;
    }

    const nuevo = {
      nombre,
      descripcion,
      precio: parseFloat(precio),
      cantidad: parseInt(cantidad)
    };

    try {
      const creado = await crearItem(nuevo);
      setItems([...items, creado]);
      limpiarFormulario();
    } catch (err) {
      alert('Error al crear el ítem');
    }
  };

  const handleEditar = (item) => {
    setNombre(item.nombre);
    setDescripcion(item.descripcion);
    setPrecio(item.precio);
    setCantidad(item.cantidad);
    setModoEdicion(true);
    setIdEditando(item.id);
  };

  const handleGuardarCambios = async () => {
    const actualizado = {
      nombre,
      descripcion,
      precio: parseFloat(precio),
      cantidad: parseInt(cantidad)
    };

    try {
      const actualizadoItem = await actualizarItem(idEditando, actualizado);
      const nuevosItems = items.map((i) =>
        i.id === idEditando ? actualizadoItem : i
      );
      setItems(nuevosItems);
      limpiarFormulario();
    } catch (err) {
      alert('Error al actualizar el ítem');
    }
  };

  const handleEliminar = async (id) => {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este ítem?');
    if (!confirmacion) return;

    try {
      await eliminarItem(id);
      const nuevos = items.filter((i) => i.id !== id);
      setItems(nuevos);
    } catch (err) {
      alert('Error al eliminar el ítem');
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-4">
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-6">
      <div className="bg-blue-100 p-4 rounded mb-4">
        <h1 className="text-3xl font-bold text-center text-blue-800">Inventario</h1>
      </div>

      {loading && <p className="text-center text-gray-600">Cargando...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <Formulario
        nombre={nombre}
        descripcion={descripcion}
        precio={precio}
        cantidad={cantidad}
        setNombre={setNombre}
        setDescripcion={setDescripcion}
        setPrecio={setPrecio}
        setCantidad={setCantidad}
        modoEdicion={modoEdicion}
        handleAgregar={handleAgregar}
        handleGuardarCambios={handleGuardarCambios}
        limpiarFormulario={limpiarFormulario}
      />

      <TablaInventario
        items={items}
        handleEditar={handleEditar}
        handleEliminar={handleEliminar}
      />
    </div>
  </div>
);
}

export default App;

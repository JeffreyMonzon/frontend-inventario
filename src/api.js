const API_URL = 'https://back-web-zakh.shuttle.app';

export async function obtenerItems() {
  const res = await fetch(`${API_URL}/get_items`);
  if (!res.ok) throw new Error('Error al obtener ítems');
  return res.json();
}

export async function crearItem(item) {
  const res = await fetch(`${API_URL}/create_item`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
  if (!res.ok) throw new Error('Error al crear ítem');
  return res.json();
}

export async function actualizarItem(id, item) {
  const res = await fetch(`${API_URL}/update_item/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
  if (!res.ok) throw new Error('Error al actualizar ítem');
  return res.json();
}

export async function eliminarItem(id) {
  const res = await fetch(`${API_URL}/delete_item/${id}`, {
    method: 'POST'
  });
  if (!res.ok) throw new Error('Error al eliminar ítem');
}

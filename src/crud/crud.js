import React, { useState, useEffect } from 'react';

const Crud = () => {
  // Estado para almacenar la lista de elementos (simulado como array de objetos)
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  // Estado para almacenar los valores del nuevo elemento a agregar
  const [newItemValue, setNewItemValue] = useState('');

  const fetchProvedores = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/provedores/list');
  
      if (response.ok) {
        const result = await response.json();
        setData(result); 
        console.log(result)// Almacena los datos obtenidos en el estado
      } else {
        console.error('Error al obtener los datos');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Simulación de datos iniciales (puedes obtenerlos de una API o base de datos)
  useEffect(() => {
    // Aquí puedes realizar una solicitud fetch o cargar datos iniciales
    // por ejemplo: fetchItems();
    // Por ahora, simularemos una lista de elementos
    fetchProvedores();
    const initialItems = [
      { id: 1, name: 'Elemento 1' },
      { id: 2, name: 'Elemento 2' },
      // ... más elementos
    ];
    setItems(initialItems);
  }, []);

  // Función para agregar un nuevo elemento a la lista
  const addItem = () => {
    const newItem = {
      id: items.length + 1, // Puedes usar una mejor lógica para generar IDs
      name: newItemValue,
    };
    setItems([...items, newItem]);
    setNewItemValue('');
  };

  // Función para eliminar un elemento de la lista
  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    fetchProvedores();
  };

  return (
    <div>
    <h2>Lista de Proveedores</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Ciudad</th>
          <th>Dirección</th>
          <th>Teléfono</th>
          <th>NIT</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.idprovedor}>
            <td>{item.idprovedor}</td>
            <td>{item.nombre}</td>
            <td>{item.ciudad}</td>
            <td>{item.direccion}</td>
            <td>{item.telefono}</td>
            <td>{item.nitt}</td>
            <td>
              <button onClick={() => deleteItem(item.idprovedor)}>Actualizar</button>
              <button onClick={() => deleteItem(item.idprovedor)}>Eliminar</button>
              {/* Agrega botones/editar y lógica para editar */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default Crud;

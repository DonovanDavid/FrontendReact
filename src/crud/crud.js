import { useState } from 'react';
import './crud.css'; // Archivo CSS para los estilos
import CrudTable from '../crud-Table/crud-Table';

const Crud = () => {
  const initialData = [
    { id: 1, nombre: 'Elemento 1', descripcion: 'Descripción 1' },
    { id: 2, nombre: 'Elemento 2', descripcion: 'Descripción 2' },
    // ... más datos
  ];

  const [data, setData] = useState(initialData);
  const [editItem, setEditItem] = useState(null);

  const handleEdit = (item) => {
    setEditItem(item);
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleCreate = () => {
    setEditItem({ id: null, nombre: '', descripcion: '' });
  };

  return (
    <div className="crud-container">
      <h2>Tabla CRUD</h2>
      <CrudTable
        data={data}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {/* Otros componentes o lógica para la edición / creación */}
    </div>
  );
};

export default Crud;


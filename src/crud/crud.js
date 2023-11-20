import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const Crud = () => {
  const url = "http://localhost:3000/api/provedor/";
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [form, setForm] = useState({
    id: "",
    ciudad: "",
    direccion: "",
    nombre: "",
    telefono:"",
    nit: "",
    tipoModal: "",
  });
  // Estado para almacenar la lista de elementos (simulado como array de objetos)
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);

  const fetchProvedores = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/provedor/");

      if (response.ok) {
        const result = await response.json();
        setData(result);
        console.log(result); // Almacena los datos obtenidos en el estado
      } else {
        console.error("Error al obtener los datos");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const peticionPost = async () => {
    try {
      const { id, ...formData } = form; // Elimina 'id' del cuerpo de la petición
      await axios.post(url, formData);
      setModalInsertar(false);
      fetchProvedores();
    } catch (error) {
      console.log(error.message);
    }
  };

  const peticionPut = async () => {
    try {
      await axios.put(`${url}${form.id}`, form);
      setModalInsertar(false);
      fetchProvedores();
    } catch (error) {
      console.log(error.message);
    }
  };

  const peticionDelete = async () => {
    try {
      console.log(form.id)
      await axios.delete(`${url}${form.id}`);
      setModalInsertar(false);
      setModalEliminar(false);
      fetchProvedores();
    } catch (error) {
      console.log(error.message);
    }
  };

  // Función para abrir/cerrar el modal
  const toggleModal = () => {
    setModalInsertar(!modalInsertar);
  };
  const toggleModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  // Simulación de datos iniciales (puedes obtenerlos de una API o base de datos)
  useEffect(() => {
    // Aquí puedes realizar una solicitud fetch o cargar datos iniciales
    // por ejemplo: fetchItems();
    // Por ahora, simularemos una lista de elementos
    fetchProvedores();
    const initialItems = [
      { id: 1, name: "Elemento 1" },
      { id: 2, name: "Elemento 2" },
      // ... más elementos
    ];
    setItems(initialItems);
  }, []);


  const seleccionarEmpresa = (item) => {
    setForm({
      id: item.id,
      ciudad: item.ciudad,
      direccion: item.direccion,
      nombre: item.nombre,
      telefono: item.telefono,
      nit: item.nit,
      tipoModal: 'actualizar',
    });
  };
  

  const handleChange = async (e) => {
    e.persist();
    await setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
      <button
        className="btn btn-success"
        onClick={() => {
          setForm({
            id: "",
            ciudad: "",
            direccion: "",
            nombre: "",
            telefono:"",
            nit: "",
            tipoModal: "insertar",
          });
          setModalInsertar(true);
        }}
      >Crear</button>
      <table id="tabla" className="table mt-2 table-bordered table-striped">
        <thead>
          <tr className="text-center">
            {/* th deben tener el nombre de las columnas de los parámetros */}
            <th scope="col">ID</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Direccion</th>
            <th scope="col">Nombre</th>
            <th scope="col">Telefono</th>
            <th scope="col">Nit</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.ciudad}</td>
              <td>{item.direccion}</td>
              <td>{item.nombre}</td>
              <td>{item.telefono}</td>
              <td>{item.nit}</td>
              <td>
                <button className="btn btn-primary" onClick={()=>{
                  seleccionarEmpresa(item); 
                  setModalInsertar(true);}}>
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{
                  seleccionarEmpresa(item); 
                  setModalEliminar({modalEliminar: true})}}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal para insertar o actualizar */}
      <Modal isOpen={modalInsertar} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {form.tipoModal === "insertar"
            ? "Insertar Empresa"
            : "Actualizar Empresa"}
        </ModalHeader>
        <ModalBody>
          {/* Contenido del formulario dentro del modal */}
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input
              className="form-control"
              type="text"
              name="id"
              id="id"
              readOnly
              onChange={handleChange}
              value={form ? form.id : data.length + 1} // Reemplaza 'data.length + 1' con el valor correspondiente
            />
            <br />
            <label htmlFor="nombre">Ciudad</label>
            <input
              className="form-control"
              type="text"
              name="ciudad"
              id="ciudad"
              onChange={handleChange}
              value={form ? form.ciudad : ""}
            />
            <br />
            <label htmlFor="nombre">Direccion</label>
            <input
              className="form-control"
              type="text"
              name="direccion"
              id="direccion"
              onChange={handleChange}
              value={form ? form.direccion : ""}
            />
            <br />
            <label htmlFor="nombre">Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              id="nombre"
              onChange={handleChange}
              value={form ? form.nombre : ""}
            />
            <br />
            <label htmlFor="nombre">Telefono</label>
            <input
              className="form-control"
              type="text"
              name="telefono"
              id="telefono"
              onChange={handleChange}
              value={form ? form.telefono : ""}
            />
            <br />
            <label htmlFor="pais">Nit</label>
            <input
              className="form-control"
              type="text"
              name="nit"
              id="nit"
              onChange={handleChange}
              value={form ? form.nit : ""}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          {form.tipoModal === "insertar" ? (
            <button className="btn btn-success" onClick={peticionPost}>
              Insertar
            </button>
          ) : (
            <button className="btn btn-primary" onClick={peticionPut}>
              Actualizar
            </button>
          )}
          <button className="btn btn-danger" onClick={toggleModal}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      {/* Modal para eliminar */}
      <Modal isOpen={modalEliminar} toggle={toggleModal}>
        <ModalBody>
          ¿Estás seguro que deseas eliminar {form && form.nombre}?
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={peticionDelete}>
            Sí
          </button>
          <button className="btn btn-secondary" onClick={toggleModalEliminar}>
            No
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Crud;

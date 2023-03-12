import { useState, useEffect } from "react";
import Errores from "./Errores";

const Formulario = ({
  reparaciones,
  setReparaciones,
  reparacion,
  setReparacion,
}) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [imei, setImei] = useState("");
  const [fecha, setFecha] = useState("");
  const [averia, setAveria] = useState("");

  const [error, setError] = useState(false);

  //comprobar si un objeto tiene algo
  useEffect(() => {
    if (Object.keys(reparacion).length > 0) {
      setNombre(reparacion.nombre);
      setTelefono(reparacion.telefono);
      setEmail(reparacion.email);
      setMarca(reparacion.marca);
      setModelo(reparacion.modelo);
      setImei(reparacion.imei);
      setFecha(reparacion.fecha);
      setAveria(reparacion.averia);
    }
  }, [reparacion]);

  // Truco para generar un ID unico
  const generarId = () => {
    const random = Math.random().toString(36).slice(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [nombre, telefono, email, marca, modelo, imei, fecha, averia].includes("")
    ) {
      setError(true);
      return;
    }
    setError(false);

    const ot = {
      nombre,
      telefono,
      email,
      marca,
      modelo,
      imei,
      fecha,
      averia,
    };

    if (reparacion.id) {
      //editando

      ot.id = reparacion.id;
      const otsActualizados = reparaciones.map((reparacionState) =>
        reparacionState.id === reparacion.id ? ot : reparacionState
      );
      setReparaciones(otsActualizados);
      setReparacion({});
    } else {
      ot.id = generarId();
      setReparaciones([...reparaciones, ot]);
      //nuevo registro
    }

    //Pasamos la ot a la lista de reparaciones
    // localStorage.setItem('reparaciones',JSON.stringify(reparaciones))

    //reiniciamos el formulario para que los datos se vacien
    setNombre("");
    setTelefono("");
    setEmail("");
    setMarca("");
    setModelo("");
    setImei("");
    setFecha("");
    setAveria("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Reparaciones
      </h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Agregar Reparacion y {""}
        <span className="text-indigo-600 font-bold ">Administrar</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
        onSubmit={handleSubmit}
      >
        {error && (
          <Errores>
            <p>Todos los campos son Obligatorios</p>
          </Errores>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="nombre"
          >
            Nombre y apellidos del cliente
          </label>

          <input
            id="nombre"
            type="text"
            placeholder="Introduzca nombre y apellidos"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="telefono"
          >
            Telefono de contacto
          </label>

          <input
            id="telefono"
            type="number"
            placeholder="Introduzca telefono de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Correo electronico
          </label>

          <input
            id="email"
            type="email"
            placeholder="Introduzca correo electronico"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="marca"
          >
            Marca
          </label>

          <input
            id="marca"
            type="text"
            placeholder="Marca del terminal"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="marca"
          >
            Modelo
          </label>

          <input
            id="modelo"
            type="text"
            placeholder="Modelo del terminal"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="imei"
          >
            IMEI
          </label>

          <input
            id="imei"
            type="number"
            placeholder="IMEI del terminal"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={imei}
            onChange={(e) => setImei(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="fecha"
          >
            Fecha de entrada
          </label>

          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="averia"
          >
            Averia:
          </label>

          <textarea
            id="averia"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe la averia"
            value={averia}
            onChange={(e) => setAveria(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all"
          value={reparacion.id ? "Editar reparacion" : "Nueva reparacion"}
        />
      </form>
    </div>
  );
};

export default Formulario;

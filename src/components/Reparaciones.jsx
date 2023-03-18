import { useState } from "react";


const Reparaciones = ({ reparacion,setReparacion,eliminarReparacion, finalizarReparacion }) => {
  const [finalizar, setFinalizar] = useState('');
  const [finalizado, setFinalizado] = useState(false);
  console.table(reparacion)

const handleEliminar= ()=>{
  const respuesta = confirm('Desea eliminar la reparacion?')
  if (respuesta){
    eliminarReparacion(id)
  }
}


  const fechaActual = () => {
    const fechaActual = new Date();
    const dia = fechaActual.getDate().toString().padStart(2, "0");
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0");
    const anio = fechaActual.getFullYear().toString();
    const hora = fechaActual.getHours().toString().padStart(2, "0");
    const minutos = fechaActual.getMinutes().toString().padStart(2, "0");
    const fechaFormateada = `${dia}/${mes}/${anio} ${hora}:${minutos}`;
    setFinalizar(fechaFormateada)
    finalizarReparacion(fechaFormateada,id)
    setFinalizado(true)
   
  };
  // const otFinalizada = {...reparacion}

  // otFinalizada.fechaFinalizada = {finalizar}
  // console.table(otFinalizada)

  const { nombre, telefono, email, marca, modelo, imei, fecha, estado, fechaFinalizada, averia,id } =
    reparacion;

    const divStyle = {
      margin: '5rem',
      backgroundColor: fechaFinalizada || estado == 'Reparado' ? '#D8E8C8' : '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '2.5rem',
      borderRadius: '0.5rem',
    };
  return (
    <div style={divStyle}>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Nombre y Apellidos:{" "}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Telefono: <span className="font-normal normal-case">{telefono}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Correo electronico:{" "}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Marca: <span className="font-normal normal-case">{marca}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Modelo: <span className="font-normal normal-case">{modelo}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        IMEI: <span className="font-normal normal-case">{imei}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha de entrada:{" "}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        estado:{" "}
        <span className="font-normal normal-case">{estado}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Fecha de Reparacion:{" "}
        <span className="font-normal normal-case">{fechaFinalizada}</span>
      </p>
      <p className="font-bold mb-3 uppercase text-gray-700">
        Averia: <span className="font-normal normal-case">{averia}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={()=>{
            setReparacion(reparacion)
          }}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white font-bold uppercase rounded-lg"
          onClick={fechaActual}
          disabled={finalizado}
        >
          {finalizado ? 'Finalizada' : 'Finalizar'}
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Reparaciones;

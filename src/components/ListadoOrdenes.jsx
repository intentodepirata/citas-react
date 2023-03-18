import Reparaciones from "./Reparaciones";



const ListadoOrdenes = ({ reparaciones, setReparacion,eliminarReparacion, finalizarReparacion }) => {



  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll p-0">
      {reparaciones && reparaciones.length ? (
        <>
        <h2 className="font-black text-3xl text-center ">
            {" "}
            Listado de Ordenes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold ">Reparaciones</span>
          </p>
          {reparaciones.map((reparacion) => (
            <Reparaciones
             key={reparacion.id} 
             reparacion={reparacion}
             setReparacion={setReparacion}
             eliminarReparacion={eliminarReparacion}
             finalizarReparacion={finalizarReparacion}
             
             

            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center ">No hay Ordenes de Trabajo</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando reparaciones y{" "}
            <span className="text-indigo-600 font-bold "> apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoOrdenes;

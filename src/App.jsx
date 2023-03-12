import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoOrdenes from "./components/ListadoOrdenes";



function App() {
  const [reparaciones, setReparaciones] = useState([]);
  const [reparacion, setReparacion] = useState({});


  useEffect(()=>{
   
      const reparacionesLS = JSON.parse( localStorage.getItem('reparaciones'))
      reparacionesLS?.length > 0 && setReparaciones(reparacionesLS)
    
  },[])



  useEffect(()=>{
  localStorage.setItem('reparaciones', JSON.stringify(reparaciones))
  },[reparaciones])



  const eliminarReparacion = id=>{
    const reparacionesActualizados = reparaciones.filter(reparacion => reparacion.id !== id)
    setReparaciones(reparacionesActualizados)
  }



  return (
    <div className="container mx-auto mt-20">
      <Header
        
       />

      <div className="mt-12 md:flex">
        <Formulario
        reparaciones = {reparaciones}
        setReparaciones = {setReparaciones}
        reparacion={reparacion}
        setReparacion={setReparacion}
         />
        
        <ListadoOrdenes
          reparaciones = {reparaciones}
          setReparacion = {setReparacion}
        eliminarReparacion={eliminarReparacion}
          
         />

      </div>
    </div>
  );
}

export default App;

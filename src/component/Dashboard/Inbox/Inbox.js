import React, { useEffect } from 'react';
import "../../../css/inbox.css";
import Dashboard from '../Dashboard';
import { db } from '../../../firebase';

import MUIDataTable from "mui-datatables";



function Inbox() {


  const [data,setData]=React.useState([]);



  /*    read data firestorage 
  */

   useEffect( () => {

     const obtenerDatos = async()=>{
    
    db.collection("contacto").orderBy("fecha","desc").onSnapshot((querySnapshot) => {
  
      querySnapshot.forEach((doc) => {
      
      setData(data => [...data, [doc.data().nombre,doc.data().documento,doc.data().correo,doc.data().direccion,doc.data().municipio, doc.data().departamento,doc.data().tipoSolicitud]]);
      });
    });
    return () => {
      console.info('Bye!') // It won't run
    };
  }
  obtenerDatos()
  }, []);


 
  const columns = ["NOMBRE", "CC/NIT", "CORREO ELECTRONICO", "DIRECCION","MUNICIPIO","DEPARAMENTO","TIPO SOLICITUD"];



  const options = {
    filterType: 'checkbox',
  };

  

  return (
    <div id="inbox">

      <div><Dashboard /></div>

<hr/>

<div style={{marginLeft:'18em'}}>
<MUIDataTable 
  title={"MENSAJES CONTACTO"} 
  data={data} 
  columns={columns} 
  options={options} 
/>

</div>
<hr/><hr/>
    </div>
  );
}

export default Inbox;
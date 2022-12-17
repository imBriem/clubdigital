import React,{useEffect} from 'react';
import "../../../css/servicesDashboard.css";
import Dashboard from '../Dashboard';
import { db } from '../../../firebase';

import MUIDataTable from "mui-datatables";

function ServicesDashboard(){

    const [data,setData]=React.useState([]);



    /*    read data firestorage 
    */
  
     useEffect( () => {
      
      db.collection("contacto").orderBy("fecha","desc").onSnapshot((querySnapshot) => {
    
        querySnapshot.forEach((doc) => {
          
     /*    name = `${doc.data().nombre}`
        documentt=  `${doc.data().documento}`
        email= `${doc.data().correo}`
        adress= `${doc.data().direccion}`
         mun= `${doc.data().municipio}`
         dep= `${doc.data().departamento}`
        solicitud= `${doc.data().tipoSolicitud}` */
        
        setData(data => [...data, [doc.data().nombre,doc.data().documento,doc.data().correo,doc.data().direccion,doc.data().municipio, doc.data().departamento,doc.data().tipoSolicitud]]);
        });
      });
      return () => {
        console.info('Bye!') // It won't run
      };
    }, []);
   
    const columns = ["NOMBRE", "CC/NIT", "CORREO ELECTRONICO", "DIRECCION","MUNICIPIO","DEPARAMENTO","TIPO SOLICITUD"];
  
  
  
    const options = {
      filterType: 'checkbox',
    };

    return(
        <div id="dashServices">

      <div><Dashboard /></div>

<hr/>

<div style={{marginLeft:'18em'}}>
<MUIDataTable 
  title={"INSTALACION"} 
  data={data} 
  columns={columns} 
  options={options} 
/>

</div>
<hr/><hr/>

<hr/>

<div style={{marginLeft:'18em'}}>
<MUIDataTable 
  title={"REPARACION"} 
  data={data} 
  columns={columns} 
  options={options} 
/>

</div>
<hr/><hr/>

<hr/>

<div style={{marginLeft:'18em'}}>
<MUIDataTable 
  title={"DESMONTE"} 
  data={data} 
  columns={columns} 
  options={options} 
/>

</div>
<hr/><hr/>

<hr/>

<div style={{marginLeft:'18em'}}>
<MUIDataTable 
  title={"MANTENIMIENTO"} 
  data={data} 
  columns={columns} 
  options={options} 
/>

</div>
<hr/><hr/>
    </div>
    );
}

export default ServicesDashboard;
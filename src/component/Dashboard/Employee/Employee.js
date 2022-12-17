import React, { useEffect } from 'react';
import "../../../css/employee.css";
import Dashboard from '../Dashboard';
import { db } from '../../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label } from 'reactstrap';
import MUIDataTable from "mui-datatables";
import Divider from '@material-ui/core/Divider';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Employee() {


  //get firestore data
  const [data, setData] = React.useState([]);

  //get document ID  
  const [id, setId] = React.useState('');
  const [rowData, setRowData] = React.useState([]);
  const [editId, setEditId] = React.useState('');

  //handleSubmit
  const [tipoDoc, setTipoDoc] = React.useState('');
  const [doc, setDoc] = React.useState('');
  const [lugarExp, setLugarExp] = React.useState('');
  const [nombre, setNombre] = React.useState('');
  const [direccion, setDireccion] = React.useState('');
  const [telefono, setTelefono] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [cargo, setCargo] = React.useState('');
  const [rh, setRh] = React.useState('');
  const [eps, setEps] = React.useState('');
  const [tiempoPago, setTiempoPago] = React.useState('');
  const [sueldo, setSueldo] = React.useState('');

  //Modal state
  const [state, setState] = React.useState(false);

  //Modal Form
  const [tipoDocEdit, setTipoDocEdit] = React.useState('');
  const [docEdit, setDocEdit] = React.useState('');
  const [lugarExpEdit, setLugarExpEdit] = React.useState('');
  const [nombreEdit, setNombreEdit] = React.useState('');
  const [direccionEdit, setDireccionEdit] = React.useState('');
  const [telefonoEdit, setTelefonoEdit] = React.useState('');
  const [emailEdit, setEmailEdit] = React.useState('');
  const [cargoEdit, setCargoEdit] = React.useState('');
  const [rhEdit, setRhEdit] = React.useState('');
  const [epsEdit, setEpsEdit] = React.useState('');
  const [tiempoPagoEdit, setTiempoPagoEdit] = React.useState('');
  const [sueldoEdit, setSueldoEdit] = React.useState('');



  //Form
  const handleSubmit = async (e) => {

   
    setData([]);

    db.collection("empleado").add({
      tipoDoc: tipoDoc,
      doc: doc,
      lugarExp: lugarExp,
      nombre: nombre,
      direccion: direccion,
      telefono: telefono,
      email: email,
      cargo: cargo,
      rh: rh,
      eps: eps,
      tiempoPago: tiempoPago,
      sueldo: sueldo,

    }).then(() => {

    }).catch((error) => {
      alert(error.message)
    });
  }

  //Button delete
  const handleDelete = async (id, index) => {
    setData([]);
    let parse = '';
    let parse2 = '';
    console.log(id);
    console.log(index);
    parse = parseInt(index);

    for (let i = 0; i < id.length; i++) {
      if (i === parse) {
        const element = id[i];
        console.log("element", typeof (element))
        parse2 = element;
        console.log("B3Jnpmmtipmi3IwvxKzs" == parse2)
        await db.collection("empleado").doc(parse2).delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }

    }

  }

  //Modal & edit
  const openModal = (index, rowData) => {
    let parse = '';
    setState(true);
    setEditId(index);
    parse = parseInt(index);
    console.log(rowData)
    //code here
     for (let i = 0; i < rowData.length; i++) {
      if (i === parse) {
        setTipoDocEdit(rowData[i].tipoDoc)
        setNombreEdit(rowData[i].nombre)
        setDocEdit(rowData[i].doc)
        setLugarExpEdit(rowData[i].lugarExp)
setDireccionEdit(rowData[i].direccion)
setTelefonoEdit(rowData[i].telefono)
setEmailEdit(rowData[i].email)
setCargoEdit(rowData[i].cargo)
setRhEdit(rowData[i].rh)
setEpsEdit(rowData[i].eps)
setTiempoPagoEdit(rowData[i].tiempoPago)
setSueldoEdit(rowData[i].sueldo)
      }
    } 
  }
  const enviarData = async (id, index) => {
    setData([]);
    let parse = '';
    let parse2 = '';
    console.log(id);
    console.log(index);
    parse = parseInt(index);

    for (let i = 0; i < id.length; i++) {

      if (i === parse) {
        const element = id[i];

        parse2 = element;


        /* console.log("B3Jnpmmtipmi3IwvxKzs" == parse2) */
        await db.collection("empleado").doc(parse2).update({
          tipoDoc: tipoDocEdit,
          doc: docEdit,
          lugarExp: lugarExpEdit,
          nombre: nombreEdit,
          direccion: direccionEdit,
          telefono: telefonoEdit,
          email: emailEdit,
          cargo: cargoEdit,
          rh: rhEdit,
          eps: epsEdit,
          tiempoPago: tiempoPagoEdit,
          sueldo: sueldoEdit,
        }).then(() => {
          alert("sucessfull")
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      }

    }



    setState(false);
  }

  //Display data firestore in MUI dataTable
  useEffect(() => {

    db.collection('empleado')
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {
          setData(data => [...data, [doc.data().tipoDoc, doc.data().doc, doc.data().lugarExp, doc.data().nombre, doc.data().direccion, doc.data().telefono, doc.data().email, doc.data().cargo, doc.data().rh, doc.data().eps, doc.data().tiempoPago, doc.data().sueldo]]);
        });
      })



    db.collection('empleado').onSnapshot((snapshot) => {
      setId(snapshot.docs.map((doc) => (doc.id)))
    })

    db.collection('empleado').onSnapshot((snapshot) => {
      setRowData(snapshot.docs.map((doc) => (doc.data())))
      
    })

  }, []);


  //MUI DataTable
  const columns = [{
    name: "↓ELIMINAR",
    options: {
      filter: true,
      sort: false,
      empty: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Button color="danger" onClick={() => handleDelete(id, `${tableMeta.rowIndex}`)}>
            Eliminar
          </Button>
        );
      }
    }
  },
  {
    name: "☼EDITAR",
    options: {
      filter: true,
      sort: false,
      empty: true,
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Button color="secondary" onClick={() => openModal(`${tableMeta.rowIndex}`,rowData)}>
            Editar

          </Button>
        );
      }
    }
  }, "TIPO DOCUMENTO", "DOCUMENTO", "LUGAR EXPEDICION", "NOMBRE", "DIRECCION", "TELEFONO", "EMAIL", "CARGO", "RH", "EPS", "TIEMPO SUELDO", "SUELDO"];

  const options = {
    filterType: 'checkbox',
  };

  //Render html css js
  return (
    <div id="employ">

      <div><Dashboard /></div>

      <hr />

      <div style={{ marginLeft: '18em' }}>
        <MUIDataTable
          title={"EMPLEADOS"}
          data={data}
          columns={columns}
          options={options}
        />

      </div>

      <hr />
      <hr /><br /><br /><br />
      <Form id="form-contact" style={{marginLeft: '26em'}}>
        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Tipo documento</Form.Label>
            <Form.Select defaultValue="-" value={tipoDoc} onChange={e => { setTipoDoc(e.target.value) }}>
              <option>-</option>
              <option>Tarjeta Identidad</option>
              <option>Cedula Ciudadania</option>
              <option>Cedula Extranjeria</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Documento</Form.Label>
            <Form.Control type="text" value={doc} onChange={e => { setDoc(e.target.value) }} placeholder="0000000" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Lugar expedicion</Form.Label>
            <Form.Control type="text" value={lugarExp} onChange={e => { setLugarExp(e.target.value) }} placeholder="municipio/departamento" />
          </Form.Group>
          <hr/>
        </Row>
       
        <Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="name" value={nombre} onChange={e => { setNombre(e.target.value) }} />
                 </Form.Group>
        </Row>
<Row>
        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Direccion</Form.Label>
          <Form.Control placeholder="Cra - #" value={direccion} onChange={e => { setDireccion(e.target.value) }} />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Telefono </Form.Label>
            <Form.Control value={telefono} onChange={e => { setTelefono(e.target.value) }} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Email </Form.Label>
            <Form.Control value={email} onChange={e => { setEmail(e.target.value) }} />
          </Form.Group>
          </Row>
        <Row className="mb-3">
         
         <br/><hr/>    

<Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Tipo sangre - RH</Form.Label>
            <Form.Select defaultValue="-" value={rh} onChange={e => { setRh(e.target.value) }}>
              <option>-</option>
              <option>A+</option>
              <option>AB+</option>
              <option>O+</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>EPS </Form.Label>
            <Form.Control value={eps} onChange={e => { setEps(e.target.value) }} />
          </Form.Group>
          </Row>
         <hr/>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Cargo </Form.Label>
            <Form.Control value={cargo} onChange={e => { setCargo(e.target.value) }} />
          </Form.Group>
         
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Tiempo pago</Form.Label>
            <Form.Select defaultValue="-" value={tiempoPago} onChange={e => { setTiempoPago(e.target.value) }}>
              <option>-</option>
              <option>Diario</option>
              <option>Semanal</option>
              <option>Quincenal</option>
              <option>Mensual</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Sueldo </Form.Label>
            <Form.Control value={sueldo} onChange={e => { setSueldo(e.target.value) }} />
          </Form.Group>
        </Row>
                        <br/><br/>
                <Button color="success" onClick={() => handleSubmit()} >Agregar</Button>


      </Form>
      <div className="principal">
        <div className="secundario">
          <Modal style={{ marginTop: '20%' }} isOpen={state}>

            <ModalHeader>
              EDITAR EMPLEADO
            </ModalHeader>
            <ModalBody>
              <Form id="form-contact">
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Tipo documento</Form.Label>
                    <Form.Select defaultValue="-" name="tipoDocEdit" value={tipoDocEdit} onChange={e => { setTipoDocEdit(e.target.value) }}>
                      <option>-</option>
                      <option>Tarjeta Identidad</option>
                      <option>Cedula Ciudadania</option>
                      <option>Cedula Extranjeria</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Documento</Form.Label>
                    <Form.Control type="text" name="docEdit" value={docEdit} onChange={e => { setDocEdit(e.target.value) }} placeholder="0000000" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Lugar expedicion</Form.Label>
                    <Form.Control type="text" value={lugarExpEdit} onChange={e => { setLugarExpEdit(e.target.value) }} placeholder="municipio/departamento" />
                  </Form.Group>
                </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" name="nombre" placeholder="name" value={nombreEdit} onChange={e => { setNombreEdit(e.target.value) }} />
                </Form.Group>
                </Row>
                <Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Direccion</Form.Label>
                  <Form.Control placeholder="Cra - #" value={direccionEdit} onChange={e => { setDireccionEdit(e.target.value) }} />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Telefono </Form.Label>
                    <Form.Control value={telefonoEdit} onChange={e => { setTelefonoEdit(e.target.value) }} />
                  </Form.Group>
                  
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Email </Form.Label>
                    <Form.Control value={emailEdit} onChange={e => { setEmailEdit(e.target.value) }} />
                  </Form.Group>
                  </Row>
                <Row className="mb-3">
                 

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Cargo </Form.Label>
                    <Form.Control value={cargoEdit} onChange={e => { setCargoEdit(e.target.value) }} />
                  </Form.Group>


                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>RH</Form.Label>
                    <Form.Select defaultValue="-" value={rhEdit} onChange={e => { setRhEdit(e.target.value) }}>
                      <option>-</option>
                      <option>A+</option>
                      <option>AB+</option>
                      <option>O+</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>EPS </Form.Label>
                    <Form.Control value={epsEdit} onChange={e => { setEpsEdit(e.target.value) }} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Tiempo pago </Form.Label>
                    <Form.Control value={tiempoPagoEdit} onChange={e => { setTiempoPagoEdit(e.target.value) }} />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Sueldo </Form.Label>
                    <Form.Control value={sueldoEdit} onChange={e => { setSueldoEdit(e.target.value) }} />
                  </Form.Group>
                </Row>

               
                <Button color="success" onClick={() => enviarData(id, editId, rowData)}>Editar</Button>


              </Form>

            </ModalBody>
            <ModalFooter>

            </ModalFooter>
          </Modal>
        </div>
      </div>
      <hr />
      <hr />

    </div>
  );
}
export default Employee;
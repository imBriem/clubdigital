import React, { useState,useEffect } from 'react';
import '../../css/contact.css';


import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import firebase from 'firebase';
import { db } from '../../firebase';
import Footer from '../Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Cardimage from '../../assets/images/wath.jpg';
import Cardimage2 from '../../assets/images/35929075-mobile-icon-on-blue-background-clean-vector.jpg';
import Cardimage3 from '../../assets/images/68560398-white-message-icon-on-blue-web-button.jpg';
import Cardimage4 from '../../assets/images/phone-icon-in-flat-style-on-round-blue-background-vector-20021882.jpg';
import Cardimage5 from '../../assets/images/blue-paper-plane-icon-eps-vector_csp50754283.jpg';
import Avatar from '@material-ui/core/Avatar';

function Contact() {



  const [name, setName] = React.useState("");
  const [document, setDocument] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [direccion, setDireccion] = React.useState('');
  const [municipio, setMunicipio] = React.useState('');
  const [departamento, setDepartamento] = React.useState('');
  const [tipoSolicitud, setTipoSolicitud] = React.useState('');
 



  const handleSubmit = (e) => {
    
    e.preventDefault();
    db.collection("contacto").add({
      nombre: name,
      documento: document,
      correo: email,
      direccion: direccion,
      municipio: municipio,
      departamento: departamento,
      tipoSolicitud: tipoSolicitud,
      fecha: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(() => {
      alert("Mensaje enviado")
    }).catch((error) => {
      alert(error.message)
    });
  }
  


  const useStylesavatar = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
  }));
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();
  const classes2 = useStylesavatar();
  

  return (
    <div style={{textAlign: 'center'}} >


<br />
      <br />
      <br />
      <div class="row justify-content-center" className="txt">
      Club Digital Pone a disposición de la ciudadania la siguiente información de contácto, elija la opción de acuerdo a su requerimiento.
            </div>
      <br />
      <br />
      <br />

      <Container>
        <Row>
          <Col classname="col1">
            <h3>Información </h3>
            <p>Se dispone la informacion de contacto empresarial en los siguientes canales de atención de acuerdo a los lineamientos de nuestra empresa</p>    <br />

            <p>Club Digital al regirse de politicas de tratamiento de datos, transparencia y responsabilidad social Refri Aires S.A. da a conocer sus mecanismos de recepción y registro de hechos, que atenten o incumplan estas normas cometidos por empleados o demas personas en la cadena de valores, para no afectar el cumplimiento de los objetivos estratégicos de nuestra Empresa.</p>    <br /><br />

            <br />
            <br /><br />
            <h3>Centro de Notificaciones</h3>
            <p> Club Digital pone a disposicion de la ciudadania el siguiente canal de atencion que es de uso exclusivo para notificaciones de caracter judicial, si al comunicarse no corresponde a lo antes mencionado, haremos caso omiso de su solicitud.</p>    
            <a href="/#">clubdigitalcolombia@gmail.com</a>
            <br /><br /><br/>
            <h3>Contácto servicios</h3>
            <p>Pongase en contácto con nosotros para hacer solicitud de los servicios prestados.</p>    </Col>
          <Col>
            <h2>Canales de Atencion</h2><br />

            <div className={classes.root}>

              <Avatar alt="" src={Cardimage} className={classes2.large} /><h3>+57 300-838-2136</h3>

            </div>
            <hr />
            <div className={classes.root}>

              <Avatar alt="Remy Sharp" src={Cardimage2} className={classes2.large} /><h3>Movil: +57 999-999-9999</h3>
            </div>
            <hr />
            <div className={classes.root}>

              <Avatar alt="Remy Sharp" src={Cardimage3} className={classes2.large} /><h3>www.clubdigital.web.app</h3>
            </div>
            <hr />
            {/* <div className={classes.root}>

              <Avatar alt="Remy Sharp" src={Cardimage4} className={classes2.large} /><h3>Fijo: 999-9999</h3>
            </div>
            <hr /> */}
            <div className={classes.root}>

              <Avatar alt="Remy Sharp" src={Cardimage5} className={classes2.large} /><h3>clubdigitalcolombia@gmail.com</h3>
            </div>
            <hr />
          </Col>
        </Row>
      </Container>

<hr />
      <hr /><br /><br /><br/>

    <h1> Contactanos</h1>
      <br/>

      <Form id="form-contact">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Ingresar Nombre</Form.Label>
            <Form.Control type="text" value={name} onChange={e => { setName(e.target.value) }} placeholder="Juan Perez/Entidad S.A." />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>C.C. o NIT</Form.Label>
            <Form.Control type="text" value={document} onChange={e => { setDocument(e.target.value) }} placeholder="00000000" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="usuario@gmail.com" value={email} onChange={e => { setEmail(e.target.value) }} />
        </Form.Group>

    {/*     <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Direccion</Form.Label>
          <Form.Control placeholder="Cra - #" value={direccion} onChange={e => { setDireccion(e.target.value) }} />
        </Form.Group> */}

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Municipio </Form.Label>
            <Form.Control value={municipio} onChange={e => { setMunicipio(e.target.value) }} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Departamento</Form.Label>
            <Form.Select defaultValue="-" value={departamento} onChange={e => { setDepartamento(e.target.value) }}>
              <option>-</option>
              <option>Sucre</option>
              <option>Bolivar</option>
              <option>Cordoba</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Tipo solicitud</Form.Label>
            <Form.Select defaultValue="-" value={tipoSolicitud} onChange={e => { setTipoSolicitud(e.target.value) }} >
              <option>-</option>
              <option>Contacto</option>
              <option>PQR</option>

            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox" style={{textAlign:'left'}}>
          <Form.Check type="checkbox" label="Acepto términos del servicio y tratamiento de datos." />
        </Form.Group>

    
        <Button variant="primary" onClick={handleSubmit} type="submit">
          Enviar
        </Button>
      </Form>
      <hr />

      <Footer />
    </div>
  );
}

export default Contact;
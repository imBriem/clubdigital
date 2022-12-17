import React, { useState } from 'react';
import { db } from '../../firebase';
import Footer from '../Footer/Footer';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function ServiceInstall() {

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
            tipoSolicitud: tipoSolicitud
        }).then(() => {
            alert("successfull")
        }).catch((error) => {
            alert(error.message)
        });
    }

    return (
        <div>

            <hr />
            <hr /><br />
            <h2 style={{textAlign:'center'}}>Contacto Fotografia</h2>
            <br />
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

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Direccion</Form.Label>
                    <Form.Control placeholder="Cra - #" value={direccion} onChange={e => { setDireccion(e.target.value) }} />
                </Form.Group>

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

                <Form.Group className="mb-3" id="formGridCheckbox" style={{ textAlign: 'left' }}>
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

export default ServiceInstall;
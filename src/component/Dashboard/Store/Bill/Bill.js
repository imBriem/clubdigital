import React, { useEffect } from "react";
import "../../../../css/bill.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { makeStyles } from "@material-ui/core/styles";
import Label from "@material-ui/core/InputLabel";
import { db } from "../../../../firebase";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Logo from "../../../../assets/images/logora.png";

function Bill(props) {
  //Set label
  const [tipoDoc, setTipoDoc] = React.useState("");
  const [doc, setDoc] = React.useState("");
  const [lugarExp, setLugarExp] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cargo, setCargo] = React.useState("");
  const [rh, setRh] = React.useState("");
  const [eps, setEps] = React.useState("");
  const [tiempoPago, setTiempoPago] = React.useState("");
  const [sueldo, setSueldo] = React.useState("");

  //Modal & edit
  const [state, setState] = React.useState(false);
  const openModal = () => {
    setState(true);
  };
  const closeModal = () => {
    setState(false);
  };
  //code here
  const handleSubmit = async (e) => {
    

    db.collection("empleado")
      .add({
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
      })
      .then(() => {
        alert("Factura registrada");
        setState(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  /* useEffect(() => {


    db.collection('empleado').onSnapshot((snapshot) => {
      setId(snapshot.docs.map((doc) => (doc.id)))
    })

    db.collection('empleado').onSnapshot((snapshot) => {
      setRowData(snapshot.docs.map((doc) => (doc.data())))
      
    })

  }, []); */

  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      width: "100%",
      marginLeft: drawerWidth,
      paddingTop: theme.spacing(11),
      color: "green",
      backgroundColor: "#fff",
      textAlign: "center",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      justifyItems: "center",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Label>
            Nombre:
            <TextField id="standard-basic" value={nombre} />
          </Label>
        </Grid>
        <Grid item xs={4}>
          <Label>
            Direccion:
            <TextField id="standard-basic" value={direccion} />
          </Label>
        </Grid>
        <Grid item xs={4}>
          <Label>
            Telefono:
            <TextField id="standard-basic" value={telefono} />
          </Label>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Label>
            Tipo doc:
            <TextField id="standard-basic" value={tipoDoc} />
          </Label>
          <hr />
        </Grid>
        <Grid item xs={4}>
          <Label>
            CC/NIT:
            <TextField id="standard-basic" value={doc} />
          </Label>
          <hr />
        </Grid>
        <Grid item xs={4}>
          <Label>
            LugarExp:
            <TextField id="standard-basic" value={lugarExp} />
          </Label>
          <hr />
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Label>
            Fecha:
            <TextField id="standard-basic" value={nombre} />
          </Label>
          <hr />
        </Grid>
        <Grid item xs={4}>
          <Label>
            Vence:
            <TextField id="standard-basic" value={direccion} />
          </Label>
          <hr />
        </Grid>
        <Grid item xs={4}>
          <Label>
            # Factura:
            <TextField id="standard-basic" value={direccion} />
          </Label>
          <hr />
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Label>
            Cod:
            <TextField id="standard-basic" value={nombre} />
          </Label>
          <hr />
        </Grid>
        <Grid item xs={4}>
          <Label>
            Descripcion:
            <TextField id="standard-basic" value={direccion} />
          </Label>
          <hr />
        </Grid>
        <Grid item xs={4}>
          <Label>
            Cantidad:
            <TextField id="standard-basic" value={direccion} />
          </Label>
          <hr />
        </Grid>
         
      </React.Fragment>
    );
  }

  return (
    <div className="principalbill">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {/* <AcUnitIcon fontSize="large"/> */}
            <Typography variant="h2" noWrap>
              {/* TABLERO ADMINISTRADOR */}
              <img alt="LOGO" src={Logo} />
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="principal">
          <div className="secundario">
            {/* Modal */}
            <Modal style={{ marginTop: "20%" }} isOpen={state}>
              <ModalHeader>REGISTRAR VENTA</ModalHeader>
              <ModalBody>
                <Form id="form-contact">
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>Tipo documento</Form.Label>
                      <Form.Select
                        defaultValue="-"
                        name="tipoDocEdit"
                        value={tipoDoc}
                        onChange={(e) => {
                          setTipoDoc(e.target.value);
                        }}
                      >
                        <option>-</option>
                        <option>Tarjeta Identidad</option>
                        <option>Cedula Ciudadania</option>
                        <option>Cedula Extranjeria</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Documento</Form.Label>
                      <Form.Control
                        type="text"
                        name="docEdit"
                        value={doc}
                        onChange={(e) => {
                          setDoc(e.target.value);
                        }}
                        placeholder="0000000"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Lugar expedicion</Form.Label>
                      <Form.Control
                        type="text"
                        value={lugarExp}
                        onChange={(e) => {
                          setLugarExp(e.target.value);
                        }}
                        placeholder="municipio/departamento"
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control
                        type="text"
                        name="nombre"
                        placeholder="name"
                        value={nombre}
                        onChange={(e) => {
                          setNombre(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <Form.Label>Direccion</Form.Label>
                      <Form.Control
                        placeholder="Cra - #"
                        value={direccion}
                        onChange={(e) => {
                          setDireccion(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Telefono </Form.Label>
                      <Form.Control
                        value={telefono}
                        onChange={(e) => {
                          setTelefono(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Email </Form.Label>
                      <Form.Control
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Cargo </Form.Label>
                      <Form.Control
                        value={cargo}
                        onChange={(e) => {
                          setCargo(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>RH</Form.Label>
                      <Form.Select
                        defaultValue="-"
                        value={rh}
                        onChange={(e) => {
                          setRh(e.target.value);
                        }}
                      >
                        <option>-</option>
                        <option>A+</option>
                        <option>AB+</option>
                        <option>O+</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>EPS </Form.Label>
                      <Form.Control
                        value={eps}
                        onChange={(e) => {
                          setEps(e.target.value);
                        }}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Tiempo pago </Form.Label>
                      <Form.Control
                        value={tiempoPago}
                        onChange={(e) => {
                          setTiempoPago(e.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>Sueldo </Form.Label>
                      <Form.Control
                        value={sueldo}
                        onChange={(e) => {
                          setSueldo(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Row>

                  <Button color="success" onClick={() => handleSubmit()}>
                    Agregar
                  </Button>
                  <Button
                    style={{ marginLeft: "25px" }}
                    color="danger"
                    onClick={() => closeModal()}
                  >
                    X
                  </Button>
                </Form>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
      {/*Design bill*/}
      <div id="bill">
        <h6> REFRI AIRES - NIT. 1103098977-6</h6>
        <hr />
        <div id="bill2">
          <Grid container item xs={12} spacing={3}>
            <FormRow2 />
          </Grid>
        </div>
        <div id="bill2">
          <hr />

          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <FormRow1 />
            </Grid>

            {/*   <Grid container item xs={12} spacing={3}>
           <FormRow2 /> 
        </Grid> */}
          </Grid>
        </div>
        <div id="bill2">
         <h6>VENTA/SERVICIO </h6>
          <hr id="hrBorder" />
         {/*  <Grid container item xs={12} spacing={3}>
              <FormRow3 />
            </Grid> */}
            <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Label>
            Codigo:
            <TextField id="standard-basic" value={nombre} />
          </Label></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Label>
            Descripcion:
            <TextField id="standard-basic" value={nombre} />
          </Label></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Label>
            Cantidad:
            <TextField id="standard-basic" value={nombre} />
          </Label></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Label>
            Precio
            <TextField id="standard-basic" value={nombre} />
          </Label></Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>Detalle factura</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}> <Label>
            Total:
            <TextField id="standard-basic" value={nombre} />
          </Label></Paper>
        </Grid>
      </Grid>
        </div>
        <br />
        <Button color="secondary" onClick={() => openModal()}>
          Facturar
        </Button>
      </div>
    </div>
  );
}
export default Bill;

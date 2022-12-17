import React from 'react';
import '../../css/about.css';
import Footer from '../Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '../../assets/images/portafolio.png';
import img2 from '../../assets/images/portafolioServicios.png';
import img3 from '../../assets/images/clubdi.png';
import img4 from '../../assets/images/group2.png';
import img5 from '../../assets/images/group3.png';
import img6 from '../../assets/images/groupp3.png';
import img7 from '../../assets/images/group333.png';
import img8 from '../../assets/images/group4.png';
import img9 from '../../assets/images/group44.png';






function About(){
    return(
        <div style={{textAlign: 'center'}}>
        <br/>
        <Container>
  <Row>
    

    <Col><img style={{borderRadius:"30px"}} id="image3" src={img3} alt="img"></img></Col>
    <Col> <p >SOMOS UNA CASA PRODUCTORA AUDIOVISUAL
                QUE DESARROLLA CONTENIDOS Y COMERCIALES
                CON CALIDAD GRÁFICA Y ANIMACIÓN 3D
                PERMITIENDOLE EXPERIMENTAR A TU MARCA O
                NEGOCIO UN NUEVO ESTILO DE IMPACTO ANTE
                TUS CLIENTES</p></Col>
  </Row>
 
</Container>

           

            <hr/>
            <div className="group1" >
            <img id="image1" src={img1} alt="img"></img>
            <br/>
            <img id="image2" src={img2} alt="img"></img>
            </div>
            <hr/>
            <br/>
           

            <div className="group2" >
                <br/>
            <img id="imag1" src={img4} alt="img"></img>
            <br/><br/>
            </div>
            
            <hr/>
            <div className="group3" >
            <img style={{marginRight:"700px"}} id="image11" src={img5} alt="img"></img>
            <br/>
            <img id="image2" src={img6} alt="img"></img>
            <br/>
            <img style={{marginRight:"-700px"}} id="image33" src={img7} alt="img"></img>
            <br/><br/>
            </div>

            <hr/>
            <div className="group4" >
                <br/>
            <img id="imag1" src={img8} alt="img"></img>
            
            <br/><br/>
            </div>
            <Footer/>
        </div>
    );
}

export default About;
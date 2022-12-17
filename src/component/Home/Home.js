import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import Img1 from '../../assets/images/cd01.JPG';
import Img2 from '../../assets/images/cd02.JPG';
import Img3 from '../../assets/images/cd03.JPG';
import '../../css/home.css';
import Log from '../../assets/images/msimage.png';
import Footer from '../Footer/Footer';

function Home(){

    return(
        <div style={{textAlign: 'center'}} >
            <br/>
         {/*   <img src={Log} alt="img">
           </img>
           <h1>Home</h1> 

           <br/>*/}
<hr/>

<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img1}
      alt="EQUIPO CLUB DIGITAL"
    />
    <Carousel.Caption>
    <h5>EQUIPO CLUB DIGITAL</h5>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img2}
      alt="EQUIPO CLUB DIGITAL"
    />
    <Carousel.Caption>
      <h5>EQUIPO CLUB DIGITAL</h5>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img3}
      alt="EQUIPO CLUB DIGITAL"
    />
    <Carousel.Caption>
    <h5>EQUIPO CLUB DIGITAL</h5>
      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<br/>

<hr/><hr/>

           
           <Footer/>
        </div>
    );
}

export default Home;
import React from 'react';
import '../../css/productos.css';
import Aire from '../../assets/images/aireAcondicionado.png';
import ReactPlayer from 'react-player';
import Footer from '../Footer/Footer';

function Productos(){
    return(
        <div style={{textAlign: 'center'}} >
            <hr/>
            <div><h1 id="h1">GALERIA</h1>
            <br/>

        <hr/>
        <div className="Video">

        <ReactPlayer url="https://www.youtube.com/watch?v=XV3mtB0_C1E"/>

        </div>


{/* <h4 id="h2-info">En Club Digital le brindamos una amplia variedad de productos de excelente calidad para su elección, asegurándonos en brindarle una amplia oferta de posibilidades.
Nuestro personal está entrenado para atenderle y ofrecerle los productos que necesita.
<br/><br/><br/>
</h4> */}
<br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/>

</div>
<br/><br/><br/><br/><br/><br/>
{/* <div class="grid-container">
  <div ><a href="http://lineadecodigo.com/html/imagen-con-enlace-en-html/"><img  id="img1" src="https://concepto.de/wp-content/uploads/2019/03/panel-solar-e1553091635674.jpg"></img></a><p>Paneles solares</p></div>
  <div><a href="http://lineadecodigo.com/html/imagen-con-enlace-en-html/"><img  id="img1" src={Aire}></img></a><p>Aires Acondicionados</p></div>
  <div><a href="http://lineadecodigo.com/html/imagen-con-enlace-en-html/"><img  id="img1" src="https://www.carloseparamoltda.com/wp-content/uploads/tuber__as_y_acce_4c929d22f18b6.png"></img></a> <p>Tuberia</p> </div>  
  <div><a href="http://lineadecodigo.com/html/imagen-con-enlace-en-html/"><img  id="img1" src="https://concepto.de/wp-content/uploads/2019/03/panel-solar-e1553091635674.jpg"></img></a> <p>Refrigerante</p> </div>
  <div><a href="http://lineadecodigo.com/html/imagen-con-enlace-en-html/"><img  id="img1" src="https://concepto.de/wp-content/uploads/2019/03/panel-solar-e1553091635674.jpg"></img></a> <p>Producto 5</p> </div>
  <div><a href="http://lineadecodigo.com/html/imagen-con-enlace-en-html/"><img  id="img1" src="https://concepto.de/wp-content/uploads/2019/03/panel-solar-e1553091635674.jpg"></img></a> <p>Producto 6</p> </div>  
</div> */}

<br/><br/><br/><br/><br/><br/>
<hr/>

<Footer/>
            
        </div>
    );
}

export default Productos;
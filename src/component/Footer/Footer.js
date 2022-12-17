import React, { useEffect } from "react";
import "../../css/footer.css";
import Logo from "../../assets/images/cdlogo3.png";

import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import Face from "../../assets/images/face.jpg";
import Insta from "../../assets/images/insta.jpg";
import Twit from "../../assets/images/twit.jpg";
import Youtube from "../../assets/images/images.png";

function Footer() {
  const useStylesavatar = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    navbarStyle: {
      textAlign: "center",
    },
  }));

  const classes = useStylesavatar();

  return (
    <div className="main-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">SOBRE NOSOTROS | CLUB DIGITAL </h5>
            <img id="logo" src={Logo} alt="logo"></img>
            <br /><br /><br /><br /><hr/>
            <p class="grey-text text-lighten-4">
              Somos una entidad dedicada a la realización, producción y edición
              de contenido audiovisual con alta calidad en el servicio. Contamos
              con equipos de alta tecnología con el manejo de profesionales
              calificados en el área.
            </p>
            <br />
          </div>
          <div class="col l3 s12">
            <h5 class="white-text">ACCESOS RAPIDOS</h5>
            <ul>
              <li>
                <a class="white-text" href="/Contact">
                  Contacto
                </a>
              </li>
              <li>
                <a class="white-text" href="/Transparency">
                  Transparencia
                </a>
              </li>
              {/* <li><a class="white-text" href="/Consult">Consulta</a></li> */}
              <li>
                <a class="white-text" href="/Inform">
                  Noticias
                </a>
              </li>
              <hr />
              <h2 class="white-text">LEGALES</h2>

              <li>
                <a class="white-text" href="/Contact">
                  Notificaciones Judiciales
                </a>
              </li>
              <li>
                <a class="white-text" href="#!">
                  Tratamiento de datos
                </a>
              </li>
              <li>
                <a class="white-text" href="#!">
                  Servicios
                </a>
              </li>
              {/*  <li><a class="white-text" href="#!">Lugares</a></li> */}
            </ul>
          </div>

          <div class="col l3 s12">
            <h5 class="social">REDES SOCIALES</h5>
            <br />
            <div className="socialNet">
              <div className={classes.root}>
                <Avatar
                  alt="Remy Sharp"
                  src={Youtube}
                  className={classes.large}
                />
                <a href="https://www.youtube.com/channel/UCOlLJqeGtd_Z3xb6mB2MB4w">
                  Youtube
                </a>
              </div>
              <div className={classes.root}>
                <Avatar alt="Remy Sharp" src={Face} className={classes.large} />
                <a href="https://www.facebook.com/ClubDigitalColombia/">
                  Facebook
                </a>
              </div>
              <div className={classes.root}>
                <Avatar
                  alt="Remy Sharp"
                  src={Insta}
                  className={classes.large}
                />
                <a href="https://instagram.com/refriairescorozal?utm_medium=copy_link">
                  Instagram
                </a>
              </div>
              <div className={classes.root}>
                <Avatar alt="Remy Sharp" src={Twit} className={classes.large} />
                <a href="/#">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div class="footer-copyright">
        <div class="container">
          &copy;copyright {/* 2015 */} | CLUB DIGITAL COLOMBIA | Todos los
          derechos reservados. | Terminos del servicio. | Privacidad.
        </div>
      </div>
    </div>
  );
}

export default Footer;

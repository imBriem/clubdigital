import React from 'react';
import {auth} from '../../firebase';
import {withRouter,Link} from 'react-router-dom';
import "../../css/dashboard.css";

import AcUnitIcon from '@material-ui/icons/AcUnit';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

function Dashboard(props) { 


    const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    paddingTop: theme.spacing(15)
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
}));


  const classes = useStyles();



    const logOut = async()=>{
        await auth.signOut().then(response =>{
            props.history.push('/');
         })
         .catch(error =>{
            alert(error.message);
         });
        alert("sing out");
    }

    return(
        <div style={{textAlign:'center'}}>
             
              
               <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <AcUnitIcon fontSize="large"/>
          <Typography variant="h2" noWrap>
            TABLERO ADMINISTRADOR
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
          <div id="accounticon">
          <AccountCircleIcon fontSize="large"  />
            <h2>Administrador</h2>
            Información basica
          
          </div>

        <div className={classes.toolbar} />
        <Divider />
        
        <List>
          {['Correo Contacto', 'Servicios'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Link to="/Inbox"><MailIcon fontSize="large" /></Link> :<Link to="/ServicesDashboard"><InboxIcon fontSize="large"/></Link>}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <hr />
        <List>
          {['Ventas'].map((text, index) => (
            <ListItem button key={text} >
                
              <ListItemIcon><Link to="/Sell"><MonetizationOnIcon fontSize="large"/></Link></ListItemIcon>
             
              <ListItemText primary={text} />
            </ListItem>
          ))}
          {[
            'Inventario'
          ].map((text,index)=>(
            <ListItem button key={text}>
               <ListItemIcon><Link to="/Store"><StorefrontIcon fontSize="large"/></Link></ListItemIcon>
             
              <ListItemText primary={text}/>
            </ListItem>
          ))}
          {[
            'Empleado'
          ].map((text,index)=>(
            <ListItem button key={text}>
               
              <ListItemIcon><Link to="/Employee"> <AccessibilityNewIcon fontSize="large"/></Link></ListItemIcon>
              <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
        <hr/>
        <br/>
        <br/>
        <br/>
        <Divider/>
        <List>
        <button type="button" class="btn btn-secondary btn-lg" onClick={logOut}>Salir</button>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
    </div>
    );
}

export default withRouter(Dashboard);
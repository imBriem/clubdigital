import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nb from '../component/NavigateBar/NavigateBar';
import Home from '../component/Home/Home.js';
import About from '../component/About/About.js';
import Header from '../component/Header/Header';
import Contact from '../component/Contact/Contact';
import Login from '../component/Login/Login';
import Dashboard from '../component/Dashboard/Dashboard';
import Inbox from '../component/Dashboard/Inbox/Inbox';
import Productos from '../component/Productos/Productos';
import Photograph from '../component/Services/Photograph';
import ServiceDismount from '../component/Services/ServiceDismount';
import ServiceRepair from '../component/Services/ServiceRepair';
import ServiceMaintenance from '../component/Services/ServiceMaintenance';
import ServicesDashboard from '../component/Dashboard/ServicesDashboard/ServicesDashboard';
import Employee from '../component/Dashboard/Employee/Employee';
import Store from '../component/Dashboard/Store/Store';
import Sell from '../component/Dashboard/Store/Sell';
import Bill from '../component/Dashboard/Store/Bill/Bill';

function Routes1() {

    
    return (
        <div >
            <React.Fragment>
              <Router>
              <Header/>{/* header  */}
                  <Nb/>{/* barra de navegacion  */}
                  
                  <Switch>
                      <Route exact path="/" ><Home/></Route>
                      <Route exact path="/About" ><About/></Route>
                      <Route exact path="/Home" ><Home/></Route>
                      <Route exact path="/Contact" ><Contact/></Route>
                      <Route exact path="/Login" ><Login/></Route>
                      <Route exact path="/Dashboard" ><Dashboard/></Route>
                      <Route exact path="/Inbox" ><Inbox/></Route>
                      <Route exact path="/Productos" ><Productos/></Route>
                      <Route exact path="/Photograph" ><Photograph/></Route>
                      <Route exact path="/ServiceRepair" ><ServiceRepair/></Route>
                      <Route exact path="/ServiceDismount" ><ServiceDismount/></Route>
                      <Route exact path="/ServiceMaintenance" ><ServiceMaintenance/></Route>
                      <Route exact path="/ServicesDashboard" ><ServicesDashboard/></Route>
                      <Route exact path="/Employee" ><Employee/></Route>
                      <Route exact path="/Store" ><Store/></Route>
                      <Route exact path="/Sell" ><Sell /></Route>
                      <Route exact path="/Bill" ><Bill /></Route>
                      
                      
                  </Switch>
              </Router>
          </React.Fragment>
        </div>
    );
}

export default Routes1;
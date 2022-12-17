import React from 'react';
import '../../css/navigateBar.css';

import ReactTabIndicator from "react-tab-indicator";
import {Link} from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'







function NavigateBar() {
    
      
 
      const StyledTabs = withStyles({
        indicator: {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#6fbf73',
          '& > span': {
            maxWidth: 40,
            backgroundColor: '#357a38',
          },
        },
      })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
      
      const StyledTab = withStyles((theme) => ({
        root: {
          textTransform: 'none',
          color: '#263238',
          fontWeight: theme.typography.fontWeightRegular,
          fontSize: theme.typography.pxToRem(18),
          marginRight: theme.spacing(1),
          
        },
      }))((props) => <Tab disableRipple {...props} />);
      
      const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        padding: {
          padding: theme.spacing(0.5),
        },
        demo1: {
          backgroundColor: theme.palette.background.paper,
        },
        demo2: {
          backgroundColor: '#e3f2fd',
        },
      }));

      const useStyles2 = makeStyles((theme) => ({
        button: {
          display: 'block',
          marginTop: theme.spacing(1),
          color: '#263238', 
        },
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
      }));

       
        const classes = useStyles();
        const [age, setAge] = React.useState('');
        const [open, setOpen] = React.useState(false);
      
        const handleChange2 = (event) => {
          setAge(event.target.value);
        };
      
        const handleClose = () => {
          setOpen(false);
        };
      
        const handleOpen = () => {
          setOpen(true);
        };
      
      
        
        const classes2 = useStyles2();
        const [value, setValue] = React.useState();
      
        const handleChange = (event, newValue) => {
          setValue(newValue);
        };
    

    return (
        <div>
     <div className={classes.root}>
      
      <div className={classes.demo2}>
        <StyledTabs id="nav"   aria-label="styled tabs example">
        
        <ReactTabIndicator
                            items={[<Link to={null} ></Link>,<Link to="/Home" ><StyledTab label="Inicio"></StyledTab></Link>, <Link to="/About"  ><StyledTab label="Servicios"></StyledTab></Link>,<Link to="/Photograph"  ><StyledTab label="Galeria"></StyledTab></Link>,
                           ]}
                            borderColor={"#42a5f5"}
                            tranfromSpeed={300}
                            onClick={handleChange}
                        />; 
              
                        <div className={classes2.root}>
                        
 {/*      <FormControl className={classes2.formControl}>
      <InputLabel id="demo-controlled-open-select-label">Servicios</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
        >
        
          <MenuItem><Link to="/Photograph"><em>Fotografia</em></Link></MenuItem>
          <MenuItem ><Link to="/ServiceRepair"><em>Edición</em></Link></MenuItem>
          <MenuItem><Link to="/ServiceMaintenance"><em>Grabación</em></Link></MenuItem>
        </Select>
      </FormControl> */}
      </div>

        </StyledTabs>
        <Typography className={classes2.padding} />
      </div>
    </div>
        </div>
    );
}
export default NavigateBar;
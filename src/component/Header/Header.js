import React from 'react';
import '../../css/header.css';
import Logo from '../../assets/images/cdlogo3.png';
import HeaderImage from '../../assets/images/headerImage.png';

import ReactTabIndicator from "react-tab-indicator";
import {Link} from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {

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
          color: '#fffde7',
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
          backgroundColor: '#42a5f5',
        },
      }));
      
      const classes = useStyles();

     

    return (
        <div>
             <div className={classes.root}>
      
      <div  className={classes.demo2}>
      
        <StyledTabs aria-label="styled tabs example">
        <img style={{width:"100%"}} id="headerimg" src={HeaderImage} alt="headerimg" ></img>
        {/* <img id="logo" src={Logo} alt="logo"></img> */}
        {/* <AccountCircleIcon id="icon" fontSize="large"/> */}
        <div id="log">
       {/*  <Link  to={"/Login"}><StyledTab label="Login"></StyledTab></Link> */}
        
        

        </div>
            
                           
                            


        </StyledTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
        </div>
    );

}

export default Header;
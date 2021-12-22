import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.ico'


const Navbar = () => {
    return (
        <>
         <AppBar postion="fixed" className={classes.AppBar} color="inherit "    > 
         <Toolbar>
             <Typography variant="h6" className={classes.tittle} color="inherit" >
                 <img src={logo} alt='Commerce.js' height="25px" className={classes.image}  />
                 Richard Sells
             </Typography>
         </Toolbar>
         </AppBar>
        </>
    )
}

export default Navbar

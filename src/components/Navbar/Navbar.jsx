import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/logo.ico'
import useStyles from './styles'


const Navbar = () => {
    const classes = useStyles()
    return (
        <>
         <AppBar postion="fixed" className={classes.AppBar} color="inherit "    > 
         <Toolbar>
             <Typography variant="h6" className={classes.tittle} color="inherit" >
                 <img src={logo} alt='Richard Sells' height="25px" className={classes.image}  />
                 Richard Sells
             </Typography>
             <div className={classes.grow} />
             <div className='classes.button'>
                 <IconButton aria-label="Show the cart items" color="inherit">
                     <Badge badgeContent={6} color="secondary"> 
                     <ShoppingCart />
                     </Badge>

                 </IconButton>
             </div>
         </Toolbar>
         </AppBar>
        </>
    )
}

export default Navbar

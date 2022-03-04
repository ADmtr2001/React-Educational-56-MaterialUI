import {AppBar, Badge, IconButton, Toolbar, Typography} from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from "react";

const Header = ({handleCart, orderLength}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton color='inherit' onClick={handleCart}>
         <Badge
           color='secondary'
           badgeContent={orderLength}
         >
           <ShoppingBasketIcon/>
         </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

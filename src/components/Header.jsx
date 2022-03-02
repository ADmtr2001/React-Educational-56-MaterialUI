import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton color='inherit'>
          <ShoppingBasketIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

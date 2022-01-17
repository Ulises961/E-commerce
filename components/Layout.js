import { createTheme, CssBaseline, Link, Switch, ThemeProvider, Badge } from '@mui/material';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';

import NextLink from 'next/link';
import useStlyes from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

function Layout({ children, title, description }) {
  const classes = useStlyes();  
  const { state, dispatch } = useContext(Store);
  const {darkMode, cart} = state;


  const [mode, setMode]= useState(false);
  useEffect(()=>{
    setMode(darkMode)
  },[darkMode]);

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    body: {
      fontWeight: ' normal',
    },
    palette: {
      mode: mode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });
  const darkModeChangeHandler = ()=>{
    dispatch({type: darkMode ? 'DARK_MODE_OFF': 'DARK_MODE_ON'});
    const newDarkMode = !darkMode;
    Cookies.set('darkMode',newDarkMode ? 'ON': 'OFF',{secure:true});
  }
  return (
    <div>
      <Head>
        <title>{title ? `Next Amazona - ${title}` : 'Next Amazona'}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <AppBar position="static" className={classes.navbar}>
            <Toolbar>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className={classes.brand}>Amazona</Typography>
                </Link>
              </NextLink>
              <div className={classes.grow}></div>
              <div>
              <Switch checked={darkMode} onChange={darkModeChangeHandler}/>
                <NextLink href="/cart" passHref>
                  <Link sx={{ margin: '0.5rem', color: 'white' }}>{cart.cartItems.length > 0 ?  <Badge color="secondary" badgeContent={cart.cartItems.length}>Cart</Badge> : "Cart"}</Link>
                </NextLink>
                <NextLink href="/login" passHref>
                  <Link sx={{ margin: '0.5rem', color: 'white' }}>Login</Link>
                </NextLink>
              </div>
            </Toolbar>
          </AppBar>

          <Container className={classes.main}>{children}</Container>
          <footer className={classes.footer}>
            <Typography> &copy; All rights reserved. Next Amazona</Typography>
          </footer>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default Layout;

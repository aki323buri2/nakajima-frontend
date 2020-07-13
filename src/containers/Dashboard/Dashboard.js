import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Header from './Header';
import Drawer from './Drawer';
import Footer from './Footer';

const DRAWER_WIDTH = 200; 
const FOOTER_WIDTH = 500; 

const useStyles = makeStyles(theme => ({
  header: {}, 
  drawer: {
    width: DRAWER_WIDTH, 
  }, 
  main: {
    marginTop: theme.mixins.toolbar.minHeight, 
    minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight * 2}px)`, 
    padding: theme.spacing(1), 
  }, 
  footer: {
    position: 'sticky', 
    bottom: 0, 
    margin: '0 auto', 
    width: FOOTER_WIDTH, 
    boxShadow: theme.shadows[5], 
  }, 
}));

const Dashboard = ({
  header, 
  drawer, 
  footer, 
  children, 
  gitUrl, 
}) => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const onDrawerClose = () => setDrawerOpen(false);
  const toggleDrawerOpen = () => setDrawerOpen(!drawerOpen);

  return (
    <div>
      <Header
        className={classes.header}
        menuClick={toggleDrawerOpen}
        gitUrl={gitUrl}
      >
        {header}
      </Header>
      
      <Drawer 
        className={classes.drawer}
        onClose={onDrawerClose}
        open={drawerOpen}
      >
        {drawer}
      </Drawer>
      
      <div className={classes.main}>
        {children}
      </div>

      <Footer
        className={classes.footer}
      >
        {footer}
      </Footer>
    </div>
  )
}

export default Dashboard

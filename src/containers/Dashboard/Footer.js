import React from 'react';
import { useMuiStyles } from '../../components/MuiComponent';
import { Toolbar } from '@material-ui/core';

const styles = {};

const Footer = ({
  children, 
  className, 
  ...other 
}) => {
  const classes = useMuiStyles(styles, className)();

  return (
    <Toolbar className={classes.root} {...other}>
      {children}
    </Toolbar>
  )
}

export default Footer

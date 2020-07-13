import React from 'react'
import { Typography, Link as MuiLink } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'; 

const Link = props => (
  <MuiLink component={RouterLink} underline="none" color="inherit" {...props} />
);

const Logo = ({
  children, 
  ...other 
}) => {
  return (
    <Typography component={Link} {...other}>
      {children}
    </Typography>
  )
}

export default Logo

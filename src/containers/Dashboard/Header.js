import React from 'react'
import { useMuiStyles } from '../../components/MuiComponent';
import {
  AppBar,
  Toolbar, 
  IconButton, 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';

const styles = theme => ({
  spacer: {
    flexGrow: 1, 
  }, 
  menuIcon: {
    marginLeft: -theme.spacing(3), 
  }, 
  gitHubIcon: {
    marginRight: -theme.spacing(3), 
  }, 
});

const Header = ({
  children, 
  className, 
  menuClick, 
  gitUrl, 
  ...other
}) => {
  const classes = useMuiStyles(styles, className)();

  return (
    <AppBar className={classes.root} {...other}>
      <Toolbar>
        <Icon 
          icon={<MenuIcon/>} 
          className={classes.menuIcon} 
          onClick={menuClick}
          edge="start"
          />
        
        {children}
        
        <div className={classes.spacer} />

        <Icon 
          icon={<GitHubIcon/>} 
          className={classes.gitHubIcon} 
          href={gitUrl}
          edge="end"
          />
      </Toolbar>
    </AppBar>
  );
}

export default Header;

const Icon = ({icon, ...other}) => (
  <IconButton color="inherit" {...other}>{icon}</IconButton>
);

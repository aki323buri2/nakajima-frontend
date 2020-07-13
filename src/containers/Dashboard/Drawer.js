import React from 'react'
import {
  Drawer as DrawerBase, 
  Toolbar, 
  Divider, 
  IconButton, 
} from '@material-ui/core';
import { useMuiStyles } from '../../components/MuiComponent';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const DoublearrowIconLeft = props => (
  <DoubleArrowIcon style={{ transform: 'rotate(180deg)' }} {...props} />
);
const styles = theme => ({
  closeButton: {
    marginLeft: -theme.spacing(3), 
  }, 
});

const Drawer = ({
  children, 
  className, 
  ...other
}) => {
  const classes = useMuiStyles(styles, className)();
  const { onClose } = other; 

  return (
    <DrawerBase
      className={classes.root}
      classes={{
        paper: classes.root, 
      }}
      open={true}
      {...other}
    >
      <Toolbar>
        <IconButton className={classes.closeButton} onClick={onClose}>
          <DoublearrowIconLeft />
        </IconButton>
      </Toolbar>
      <Divider />
      {typeof children === 'function' ? children({ onClose }) : children}
    </DrawerBase>
  )
}

export default Drawer

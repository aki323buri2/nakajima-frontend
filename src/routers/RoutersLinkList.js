import React from 'react'
import {
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom'; 
import routers from './routers';

const RoutersLinkList = ({
  listClick, 
  ...other 
}) => {
  return (
    <List {...other}>
      {routers.map(({ name, path, icon, title }) => (
        <ListItem key={name} button component={RouterLink} to={path} onClick={listClick}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{title}</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default RoutersLinkList

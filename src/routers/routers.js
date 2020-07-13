import React from 'react';
import Demo from '../containers/Demo/Demo';
import Customers from '../features/customers/Customers';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

export const routers = [
  {
    name: 'customers', 
    title: 'お客様', 
    children: <Customers />, 
  }, 
  {
    name: 'demo', 
    title: 'Reduxデモ', 
    children: <Demo />
  }, 
].map(({ name, title, path, icon, ...other }) => ({
  name, 
  title: title || name, 
  path: path || `/${name}`, 
  icon: icon || <PlayCircleOutlineIcon />, 
  ...other, 
}));
export default routers; 
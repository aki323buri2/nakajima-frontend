import React from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx'; 

export const useMuiStyles = (styles, className) => (...other) => {
  const classes = makeStyles(styles)(...other);
  classes.root = clsx(classes.root, className);
  return classes;
};


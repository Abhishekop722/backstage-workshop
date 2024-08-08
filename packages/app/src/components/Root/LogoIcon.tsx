import React from 'react';
import { makeStyles } from '@material-ui/core';
import logoIcon from './logo/tw.logo.icon.png'

const useStyles = makeStyles({
  logo: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    <img className={classes.logo} src={logoIcon} alt='tw-logo-icon' />
  );
};

export default LogoIcon;

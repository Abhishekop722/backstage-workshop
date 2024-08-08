import React from 'react';
import { makeStyles } from '@material-ui/core';
import twLogo from './logo/tw.logo.png'

const useStyles = makeStyles({
  logo: {
    objectFit: 'contain',
    width: 'auto',
    height: 35,
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {
  const classes = useStyles();

  return (
    <img className={classes.logo} src={twLogo} alt="tw-logo" />
  );
};

export default LogoFull;

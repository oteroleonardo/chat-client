import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChatContext from '../context/ChatContext';
import Messages from './Messages';
import Contacts from './Contacts';
import Send from './Send';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100% !important',
    maxWidth: '100% !important',
  },
  grid: {
    margin: 0,
    flexGrow: 1,
    minHeight: '450px',
    height: '100%',
    maxWidth: '100% !important',
    backgroundColor: 'lightBlue',
    background: '-webkit-linear-gradient(360deg, #99D22B 10%, #FBFF00 360%)',
  },
}));


export default ({ match }) => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  
  return (
      <Grid container spacing={2} justify={'space-evenly'} className={classes.grid}>
        <Messages></Messages>
        <Contacts></Contacts>
        <Send></Send>
      </Grid>
  );
};



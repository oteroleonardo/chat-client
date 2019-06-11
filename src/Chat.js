import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import 'typeface-roboto';
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  list: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  chat: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  footer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

}));

export default function Chat() {
  const classes = useStyles();
  // state = {
  //   selectedOption: null,
  // };
  const { selectedOption } = this.state;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.header}><h2>Chat</h2></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.list}>
            <Select
              //value={selectedOption}
              //onChange={this.handleChange}
              options={options}
            />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.chat}>xs=9</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.footer}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}


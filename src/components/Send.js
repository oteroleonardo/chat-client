import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send'

import 'typeface-roboto';

import ChatContext from '../context/ChatContext';

const useStyles = makeStyles(theme => ({
  chat: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
  sendBox: {
    height: '100%',
    width: '90%',
    backgroundColor: '#F0F0F0',
    padding: '4px',
  },
  button: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
    fontSize: 15,
  },
  iconSmall: {
    fontSize: 20,
  },

}));

export default (props) => {
  const classes = useStyles();
  const ctx= useContext(ChatContext);
  const [message, setMessage] = useState();

  const sendMessage = (message)=> {
    console.log('message to send: ',  message);
//    setMessage(message);
    ctx.setChatCtx({...ctx.chatCtx, send: message});
    ctx.chatCtx.sendMessage(message, ctx.chatCtx.checked, ctx.chatCtx.token, ()=>setMessage(''));
  
  };

  return (
    <ChatContext.Consumer>
      {ctx => (
        <Grid item xs={12} sm={12}>
          <Paper className={classes.chat} style={{ height: '100px' }}>
            <TextField fullWidth={true} className={classes.sendBox}
              placeholder="Type your message here..."
              multiline={true}
              rows={5}
              rowsMax={5}
              value={message}
              onChange={e => setMessage(e.target.value)} 
            />
            <Button variant="contained" color="primary" className={classes.button} onClick={event => sendMessage(message)}>
              Send
        <SendIcon className={classes.rightIcon}>Send</SendIcon>
              {/* <Icon className={classes.rightIcon}>send</Icon> */}
            </Button>
          </Paper>
        </Grid>
      )}
    </ChatContext.Consumer>
  );
};

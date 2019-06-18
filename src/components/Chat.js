import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChatContext from '../context/ChatContext';
import Messages from './Messages';
import Contacts from './Contacts';
import Send from './Send';

//const ChatContext = React.createContext();
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
  const [chatCtx, setChatCtx] = useState({
    contacts: [
      { id: 1, username: 'oteroleonardo@gmail.com', status: 'connected' },
      { id: 2, username: 'carlostomada@gmail.com', status: 'disconnected' },
      { id: 3, username: 'carlosperez@gmail.com', status: 'connected' },
      { id: 5, username: 'raulssanbrano@gmail.com', status: 'disconnected' },
      { id: 6, username: 'raulssanbrano@gmail.com', status: 'connected' },
      { id: 7, username: 'raulssanbrano@gmail.com', status: 'disconnected' },
      { id: 8, username: 'raulssanbrano@gmail.com', status: 'connected' },
    ],
    messages: [
      { userId: 1, username: 'oteroleonardo@gmail.com', message: 'Hello Guys. What a wanderful day uhh... ? Would u like to go for a smoothie today noon? \n\nI just love the idea, ain\'t u?' },
      { userId: 2, username: 'carlostomada@gmail.com', message: 'What a nice day, uhh...' },
      { userId: 3, username: 'carlosperez@gmail.com', message: 'I like this chat' },
      { userId: 5, username: 'raulssanbrano@gmail.com', message: 'Hello Guys' },
      { userId: 6, username: 'raulssanbrano@gmail.com', message: 'Did you see last Marvel movie?' },
      { userId: 7, username: 'raulssanbrano@gmail.com', message: 'I hate u 3000' },
      { userId: 8, username: 'raulssanbrano@gmail.com', message: 'YOU\'RE STRONG, BUT I COULD SNAP MY FINGERS AND YOU\'D ALL CEASE TO EXIST.' },

    ],
    checked: [

    ],
    send: {},
  }

  );
  return (
    <ChatContext.Provider value={{chatCtx, setChatCtx}}>
      <Grid container spacing={2} justify={'space-evenly'} className={classes.grid}>
        <Messages></Messages>
        <Contacts></Contacts>
        <Send></Send>
      </Grid>
    </ChatContext.Provider>
  );
};



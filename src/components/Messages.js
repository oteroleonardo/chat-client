import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/CheckCircle'

import 'typeface-roboto';

import ChatContext from '../context/ChatContext';

const useStyles = makeStyles(theme => ({
  messages: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    paddingLeft: '2%',
    height: '400px !important',
    maxHeight: '400px !important',
  },
  list: {
    minHeight: '340px !important',
    maxHeight: '340px !important',
    height: '340px !important',
    overflow: 'auto',
    backgroundColor: '#F0F0F0',
  },
  inline: {
  },
  button: {
    //margin: theme.spacing(1),
    marginLeft:25,
    fontSize: 10,
  },
  itemText:{
    maxWidth: '75% !important',
    whiteSpace: 'normal',
    wordWrap: 'break-word'

  },
  rightIcon: {
    marginLeft: theme.spacing(1),
    fontSize: 15,
  },

}));
const onNoImage = event => {
  event.target.src = `${process.env.PUBLIC_URL}/avatar/avatarNoImage.jpeg`;
};

const handleClick = value => () => {
};
export default (props) => {
  const classes = useStyles();
  //const ctx = useContext(ChatContext);
  return (
    <ChatContext.Consumer>
      {(ctx) => (
        <Grid item sm={9}>
          <Paper className={classes.messages}>
            <Typography gutterBottom variant="h6" component="h6">
              Messages
        </Typography>
            <Divider variant="inset" component="div" />
            <List className={classes.list} >
              {[...ctx.chatCtx.messages].map((message, index) => {
                //const labelId = `checkbox-list-label-${message.id}`;
                return (
                  <React.Fragment key={index}>
                    <ListItem alignItems={"center"}>
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp" 
                          src={`${process.env.PUBLIC_URL}/avatar/avatar${message.userId}.jpeg`} 
                          onError={event => onNoImage(event)} />
                      </ListItemAvatar>
                      <ListItemText className={classes.itemText}
                        primary={
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            <b>{message.username}</b>: {message.message}
                          </Typography>
                        }
                      />
                      <ListItemSecondaryAction>
                        <Button variant="contained" aligh='right' color="primary" className={classes.button}>
                          Mark as readed
                          <CheckIcon className={classes.rightIcon}>Readed</CheckIcon>
                        </Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider variant="inset" component="div" />
                  </React.Fragment>
                );
              })}
            </List>
          </Paper>
        </Grid>
      )}
    </ChatContext.Consumer>
  );
};

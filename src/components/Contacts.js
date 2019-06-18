import React from 'react';
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
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import 'typeface-roboto';

import ChatContext from '../context/ChatContext';

const useStyles = makeStyles(theme => ({
  contacts: {
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
  contactCheck:{
    marginLeft: theme.spacing(2),
  },
  checkbox: {
    fontSize: 15,
  },
}));

export default (props) => {
  const classes = useStyles();

//  const [checked, setChecked] = React.useState([]);

  const onNoImage = event => {
    event.target.src = `${process.env.PUBLIC_URL}/avatar/avatarNoImage.jpeg`;
  };

  const handleToggle = (selectedContact, ctx) => () => {
    const alreadyCheckedContact = ctx.chatCtx.checked.find(el => el.id ===selectedContact.id);
    let newChecked = [...ctx.chatCtx.checked];
    if (!alreadyCheckedContact) {
      newChecked.push(selectedContact);
      if (selectedContact.id === 'Everyone') {
        ctx.chatCtx.contacts.forEach(contact => {
          if (contact.status !== 'disconnected') {
            newChecked.push(contact);
          }
        });
      }
    } else {
      if (selectedContact.id === 'Everyone') {
        newChecked.length = 0;
      } else {
        newChecked.splice(newChecked.findIndex(item => item.id === selectedContact.id), 1);
      }
    }

    ctx.setChatCtx({...ctx.chatCtx, checked: newChecked });
  };

  return (
    <ChatContext.Consumer>
      {ctx => (
        <Grid item sm={3}>
          <Paper className={classes.contacts}>
            <Typography gutterBottom variant="h6" component="h6">
              Contacts
      </Typography>
            <Divider variant="inset" component="div" />
            <List className={classes.list} >
              {[
                { id: 'Everyone', username: 'EVERYONE' },
                ...ctx.chatCtx.contacts].map(contact => {
                  const labelId = `checkbox-list-label-${contact.id}`;
                  return (
                    <React.Fragment key={contact.id}>
                      <ListItem alignItems={"center"}>
                        <ListItemAvatar>
                          <Avatar
                            alt={contact.username}
                            src={`${process.env.PUBLIC_URL}/avatar/avatar${contact.id}.jpeg`}
                            onError={event => onNoImage(event)}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            >
                              <b>{contact.username}</b>
                            </Typography>
                          }
                        />
                        <ListItemSecondaryAction className={classes.contactCheck}>
                          <Checkbox
                            edge="start"
                            checked={!!ctx.chatCtx.checked.find(selected => selected.id === contact.id)}
                            disabled={contact.status === 'disconnected'}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                            onClick={handleToggle(contact, ctx)}
                            className={classes.checkbox}
                          />
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

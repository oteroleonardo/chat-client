import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Select from 'react-select';
import 'typeface-roboto';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    //minHeight: '450px',
    //height: 'auto',
    padding: '10px',
    backgroundColor: 'lightGray',
    //justify: 'center',
  },
  grid: {
    minHeight: '450px',
    height: '100%',
    // padding: '10px',
    backgroundColor: 'lightBlue',
    //background: '-webkit-linear-gradient(360deg,#00537E 10%,#3AA17E 360%); background: linear-gradient(360deg,#00537E 10%,#3AA17E 360%)',
    //background: 'webkit-linear-gradient(360deg,#949494 10%,#efefef 360%); background: linear-gradient(360deg,#949494 10%,#efefef 360%)',
    background: '-webkit-linear-gradient(360deg, #99D22B 10%, #FBFF00 360%)',
    // justify: 'center',
    alignItems: 'stretch',
  },
  messages: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    paddingLeft: '2%',
    minHeight: '200px',

  },
  contacts: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    paddingLeft: '2%',
    minHeight: '100%',
    height: 'auto',
    //backgroundColor: 'blue',
  },
  chat: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%',
  },
  button: {
    minHeight: '40px',
    minWidth: '70px',
    verticalAlign: 'bottom',
    padding: '4px',
    margin: '8px',
    borderRadius: '30px',

  }

}));


export default ({ match }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify={'center'} className={classes.grid}>
        <Grid item sm={9}>
          <Paper className={classes.messages}>
            <Typography gutterBottom variant="h6" component="h6">
              Messages
            </Typography>
            <Divider variant="inset" component="div" />
            
            <List  style={{maxHeight: '280px', overflow: 'auto'}} >
            <ListItem alignItems={"center"}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/avatar/avatar1.jpeg`}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        <b>Robert</b>: Hello Guys
              </Typography>

                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems={"center"}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/avatar/avatar2.jpeg`}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        <b>Scotty</b>: What a nice day, uhh...
              </Typography>

                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems={"center"}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/avatar/avatar3.jpeg`}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        <b>Jennifer</b>: I like this chat
              </Typography>

                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems={"center"}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/avatar/avatar3.jpeg`}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        <b>Jennifer</b>: Hello Guys
              </Typography>

                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems={"center"}>
                <ListItemAvatar>
                  <Avatar alt="Fenton" src={`${process.env.PUBLIC_URL}/avatar/avatar4.jpeg`}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        <b>Alex</b>: Did you see last Marvel movie?
              </Typography>

                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.contacts}>
          <Typography gutterBottom variant="h6" component="h6">
              Contacts
            </Typography>
            <Divider variant="inset" component="div" />
            <List  style={{maxHeight: '280px', overflow: 'auto'}} >
            <ListItem alignItems={"center"}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/avatar/avatar1.jpeg`}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                      <b>Jennifer</b>
              </Typography>

                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems={"center"}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/avatar/avatar2.jpeg`}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                      <b>Rian</b>
              </Typography>

                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems={"center"}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/avatar/avatar4.jpeg`}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                      <b>Scott</b>
              </Typography>

                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.chat} style={{ height: '100px' }}>
            <TextField fullWidth={true} style={{height: '100%',  width: '90%', backgroundColor: '#F0F0F0', padding: '4px' }}
              placeholder="Type your message here..."
              multiline={true}
              rows={5}
              rowsMax={5}
            /><Button variant="contained" color="primary" className={classes.button}>
        Send
      </Button>          
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

// export default function Chat() {
//   const classes = useStyles();
//   const state = {
//     selectedOption: null,
//   };
//   const { selectedOption } = this.state;
//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.header}><h2>Chat</h2></Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.list}>
//             {/* <Select
//               //value={selectedOption}
//               //onChange={this.handleChange}
//               options={options}
//             /> */}
//           </Paper>
//         </Grid>
//         <Grid item xs={9}>
//           <Paper className={classes.chat}>xs=9</Paper>
//         </Grid>
//         <Grid item xs={12}>
//           <Paper className={classes.footer}>xs=12</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }


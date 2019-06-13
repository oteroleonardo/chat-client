import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'

const Header = () => {
  return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <TypoGraphy variant="h5" color="inherit">
              CHAT-CLIENT V 0.1
           </TypoGraphy>
          </Toolbar>
        </AppBar>
      </div>
  );
};


export default Header;

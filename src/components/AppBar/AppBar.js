import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '../Drawer/Drawer'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

function ButtonAppBar(props) {
  const [drawer, showDrawer] = useState(false)
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={() => {
              showDrawer(true)
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Magic: The Deck Builder
          </Typography>
          {!props.user ?
            <>
              <Button color="inherit" onClick={props.showRegister}>Register</Button>
              <Button color="inherit" onClick={props.showLogin}>Login</Button>
            </> :
            <Button color="inherit" onClick={props.logout}>Logout</Button>
          }
        </Toolbar>
      </AppBar>
      <Drawer show={drawer} showDrawer={showDrawer} />
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

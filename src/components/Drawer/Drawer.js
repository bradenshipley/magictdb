import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },

});

function TemporaryDrawer(props) {
  //holding our array of options as a multidimensional array so that we can still have the correct routes set up.
  const navbar = [['My Decks', 'decks'], ['Browse All Cards', 'browse'], ['Random Card', 'random'], ['Statistics', 'statistics'], ['Account', 'account']]
  const classes = useStyles();
  const sideList = (
    <div className={classes.list}>
      <List>
        {navbar.map((text, index) => (
          <Link to={navbar[index][1]} key={text} style={{ textDecoration: 'none' }}>
            <ListItem button key={text[0]} >
              <ListItemText primary={text[0]} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <Drawer
        open={props.show}
        onClose={() => props.showDrawer(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => props.showDrawer(false)}
          onKeyDown={() => props.showDrawer(false)}
        >
          {sideList}
        </div>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;

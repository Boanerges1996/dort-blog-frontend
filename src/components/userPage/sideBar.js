import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {BorderColorOutlined} from '@material-ui/icons'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={props.clickOne}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button onClick={props.write}>
            <ListItemIcon>
                <EditIcon />
            </ListItemIcon>
            <ListItemText >
                Write Blog
            </ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <EditIcon />
            </ListItemIcon>
            <ListItemText>
                See Blogs
            </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
      <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
      <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
      <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button> */}
      <Drawer open={props.left} onClose={props.closeLeft}>
        {sideList('left')}
      </Drawer>
      {/* <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
      <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
        {fullList('bottom')}
      </Drawer>
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer> */}
    </div>
  );
}

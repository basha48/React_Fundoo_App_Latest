import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AppBarHeader from '../AppBar/AppBarHeader.css';
import './TempDrawer.css'
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, makeStyles,ThemeProvider } from '@mui/material';
import useHistory from 'use-history';



let drawerTheam = createTheme({
  overrides : {
  MuiPaper : {
    root : {
      MuiDrawer:{
        paper : {
          top : "56px"

        }
      }

    }
  }
}
 // Muipaper-root :

});

   const menuContent =  < MenuIcon id="menu_icon"  />

   
  const svgbulb = <div>
    <img src="src\\Assets\\Images\\bulb.svg" alt="bulb" ></img>
  </div>

export default function TempDrawer({props}) {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const MailHandler = () =>{
    console.log("hello");
    let history = useHistory();
    props.history.push('/archive');
    // window.location = "http://localhost:4200/archive";
    // console.log("hello world");
     // history.push('/archive');

  }

  const list = (anchor) => (
    <Box className='BoxSize'
     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['note', 'reminder', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Archive', 'Trash'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon onClick ={MailHandler}/> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={drawerTheam}>
    <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{menuContent}</Button>
          <Drawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer >
        </React.Fragment>
      ))}
    </div>
    </ThemeProvider>
  );
}

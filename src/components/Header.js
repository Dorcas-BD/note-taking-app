import React from 'react'
import { AppBar, Button, Container, Drawer, Divider, Toolbar, List, ListItem, ListItemText, makeStyles, IconButton, Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
// import HomeOutlinedIcon from '@'
import { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

 

const useStyles = makeStyles({
  root: {
    marginBottom: 30,
  },
  title: {
    flex: 1
  },
  list: {
    width: 250,
  }
})

const Header = () => {
  const classes = useStyles();

  //for left Naviation
  const [state, setState] = useState(false);
  const toggleDrawer = (toggle) => (event) => {
    //left naviation disappear after clicking outside the naviation
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(toggle);
  }

  const list = () => (
    <div
     className={classes.list} 
     role="presentation" 
     onClick={toggleDrawer(false)} 
     onkeydown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>

          <ListItemText primary="Home"/>
        </ListItem>
      </List>
      <List>
        <ListItem button>
          <ListItemText primary="Login"/>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText primary="Signup"/>
        </ListItem>
      </List>
      <List>
        <ListItem button>
          <ListItemText primary="About"/>
        </ListItem>
      </List>

    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <IconButton color="inherit" edge="start" aria-label="Menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" className={classes.title}>Note App</Typography>
              <BrowserRouter>
                {/* <p>
                  <Link to="/login/">Login</Link>
                </p>
                <p>
                  <Link to="/signup">Sign up</Link>
                </p> */}

                <Button color="inherit">
                  Login <Link to="/login"></Link>
                </Button>
                <Button color="inherit">
                  SignUp <Link to="/signup"></Link>
                </Button>
              </BrowserRouter>
          </Toolbar>
        </Container>
        
      </AppBar>
      <Drawer 
       anchor="left" 
       open={state} 
       onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  )
}

export default Header

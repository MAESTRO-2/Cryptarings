import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'Cryptocurrencies', 'News'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',  }} >
      <Divider />
      <List >
        {navItems.map((item) => (
             
          <Link key={item} to={`/${item}`} style={{textDecoration:'none', color:'black', marginTop:'50px'}}>
              <ListItem key={item} disablePadding >
                <ListItemButton key={item} sx={{ textAlign: 'center',}}>
                 <ListItemText  primary={item} />
                </ListItemButton>
               </ListItem>
        </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',  }}>
      <CssBaseline />
      <AppBar component="nav" sx={{background:'black', color:'orange', }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box >
         <Link to="/" style={{textDecoration:'none'}}><img src='https://www.freepngimg.com/thumb/bitcoin/59669-cryptocurrency-logo-ethereum-zazzle-bitcoin-hd-image-free-png-thumb.png' alt='logo' style={{width:'50px', height:'50px', margin:'3px 5px 0 0'}} /></Link> 
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' }, 
            
            }}
          >
              <Link to="/" style={{textDecoration:'none', color:'orange'}}>Cryptarings</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block', },  marginRight:'300px'  }}>
            {navItems.map((item) => (
              <Link key={item} to={`/${item}`} style={{textDecoration:'none' ,  marginRight:'220px' }}> 
                  <Button key={item} sx={{ color: 'orange' }}>
                   {item}
                  </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box  component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none',   },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
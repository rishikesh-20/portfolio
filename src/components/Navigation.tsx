import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import LayersIcon from '@mui/icons-material/Layers';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditNoteIcon from '@mui/icons-material/EditNote';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const drawerWidth = 240;

const navItems: [string, string, React.ReactElement][] = [
  ['Home', 'top', <HomeIcon />],
  ['Skills', 'expertise', <LayersIcon />],
  ['Work', 'history', <WorkOutlineIcon />],
  ['Projects', 'projects', <DashboardIcon />],
  ['Blog', 'blog', <EditNoteIcon />],
  ['Contact', 'contact', <MailOutlineIcon />],
];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const NAV_OFFSET = 104;

  const scrollToSection = (section: string) => {
    if (section === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(section);
    if (!element) return;

    // Sections sit inside ScrollReveal, which applies a translateY until revealed.
    // getBoundingClientRect/scrollIntoView include that transform, so the landing
    // position shifts depending on whether the section has animated in yet.
    // offsetTop is layout-based and ignores transforms, so it stays consistent.
    let top = 0;
    let node: HTMLElement | null = element;
    while (node) {
      top += node.offsetTop;
      node = node.offsetParent as HTMLElement | null;
    }
    window.scrollTo({ top: Math.max(top - NAV_OFFSET, 0), behavior: 'smooth' });
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item[1])}>
              <ListItemText primary={item[0]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" id="navigation" className={`nav-pill${scrolled ? ' scrolled' : ''}`}>
        <Toolbar className='navigation-bar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box className="nav-items" sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Tooltip key={item[0]} title={item[0]} arrow enterDelay={120}>
                <IconButton
                  onClick={() => scrollToSection(item[1])}
                  className="nav-link"
                  aria-label={item[0]}
                >
                  {item[2]}
                </IconButton>
              </Tooltip>
            ))}
          </Box>

          <IconButton
            className="mode-toggle"
            onClick={() => modeChange()}
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {mode === 'dark' ? <LightModeIcon/> : <DarkModeIcon/>}
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          className="nav-drawer"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;

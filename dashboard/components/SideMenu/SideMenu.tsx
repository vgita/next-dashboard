'use client';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import HomeIcon from '@mui/icons-material/Home';
import Person2Icon from '@mui/icons-material/Person2';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import EqualizerIcon from '@mui/icons-material/Equalizer';

import { signOut, useSession } from 'next-auth/react';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { CSSObject, Theme, useMediaQuery, useTheme } from '@mui/material';

import scss from './SideMenu.module.scss';
import Link from 'next/link';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuRouteList = ['data', 'profile', 'settings', ''];
const menuListTranslations = ['Data', 'Profile', 'Settings', 'Sign Out'];
const menuListIcons = [
  // eslint-disable-next-line react/jsx-key
  <EqualizerIcon />,
  // eslint-disable-next-line react/jsx-key
  <Person2Icon />,
  // eslint-disable-next-line react/jsx-key
  <SettingsIcon />,
  // eslint-disable-next-line react/jsx-key
  <ExitToAppIcon />,
];

const SideMenu = () => {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const mobileCheck = useMediaQuery('min-width: 500px');

  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleListItemButtonClick = (text: string) => {
    text === 'Sign Out' ? signOut() : null;
    setOpen(false);
  };

  return (
    session && (
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          [`& .MuiDrawer-paper`]: { top: mobileCheck ? 64 : 57 },
          ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          }),
        }}
      >
        <div className={scss.drawHeader}>
          <IconButton onClick={handleDrawerToggle}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuListTranslations.map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <Link
                className={scss.link}
                href={`/dashboard/${menuRouteList[index]}`}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={() => handleListItemButtonClick(text)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {menuListIcons[index]}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      color: theme.palette.text.primary,
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
  );
};

export default SideMenu;

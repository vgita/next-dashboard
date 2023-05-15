'use client';

import { useSession } from 'next-auth/react';
import SideMenu from '../SideMenu/SideMenu';
import Header from '../Header';
import {
  Box,
  CssBaseline,
  IconButton,
  PaletteMode,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from '@mui/material';
import scss from './AppContent.module.scss';
import React from 'react';
import darkTheme from '@/theme/darkTheme';
import lightTheme from '@/theme/lightTheme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? darkTheme : lightTheme),
  },
});

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const AppContent = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  //const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const darkThemeChosen = React.useMemo(
    () => createTheme({ ...darkTheme }),
    []
  );

  const lightThemeChosen = React.useMemo(
    () => createTheme({ ...lightTheme }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider
        theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}
      >
        <Header ColorModeContext={ColorModeContext} />
        <main className={scss.main}>
          <CssBaseline />
          {session && (
            <>
              <SideMenu />
              {children}
            </>
          )}
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppContent;

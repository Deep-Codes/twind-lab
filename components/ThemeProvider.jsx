import React from 'react';
import { create } from 'twind';

const Theme = React.createContext({});

const ThemeProvider = ({ value, children }) => {
  const { tw } = create(value || {});
  return <Theme.Provider value={tw}>{children}</Theme.Provider>;
};

export default ThemeProvider;

export const useTheme = () => {
  return React.useContext(Theme);
};

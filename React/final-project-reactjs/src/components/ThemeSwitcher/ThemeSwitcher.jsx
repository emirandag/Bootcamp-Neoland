import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeProvider';

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-button" type="button" onClick={toggleTheme}>
      {theme === 'light' ? <MdOutlineNightlight /> : <MdOutlineLightMode /> }
    </button>
  );
};

export default ThemeSwitcher;

import React, { useEffect, useState } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    window.localStorage.setItem('theme', theme);
    setTheme(theme);
  }

  useEffect(() => {
    const thm = localStorage.getItem('theme', theme);
    if (thm === 'white-content') {
      document.body.classList.add('white-content');
    } else {
      document.body.classList.remove('white-content');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

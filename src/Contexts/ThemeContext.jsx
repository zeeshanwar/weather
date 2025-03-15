import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();
const THEME_KEY = 'theme';

function ThemeProvider({ children }) {
   const [dark, setDark] = useState(true);

   // ✅ Load theme from localStorage or system preference
   useEffect(() => {
      const savedTheme = JSON.parse(localStorage.getItem(THEME_KEY));
      if (savedTheme !== null) {
         setDark(savedTheme);
         return;
      }

      const isSystemThemeDark = window.matchMedia(
         '(prefers-color-scheme: dark)'
      ).matches;
      setDark(isSystemThemeDark);
   }, []);

   // ✅ Sync theme changes to localStorage
   useEffect(() => {
      localStorage.setItem(THEME_KEY, JSON.stringify(dark));
   }, []); // Runs whenever `dark` changes

   console.log(dark);
   

   return (
      <ThemeContext.Provider value={{ dark, setDark }}>
         {children}
      </ThemeContext.Provider>
   );
}

export { ThemeProvider };
export default ThemeContext;

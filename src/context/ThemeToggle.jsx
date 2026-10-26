// import { createContext, useContext, useEffect, useState } from 'react'

// const ThemeToggle = createContext()

// export function useTheme() {
//   return useContext(ThemeToggle)
// }

// export default function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState('light')

//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme)
//   }, [theme])

//   function toggleTheme() {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
//   }

//   return (
//     <ThemeToggle.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeToggle.Provider>
//   )
// }

// export { ThemeToggle }



import { createContext, useContext, useEffect, useState } from "react";

const ThemeToggle = createContext();

export function useTheme() {
  return useContext(ThemeToggle);
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeToggle.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeToggle.Provider>
  );
}

export { ThemeToggle };
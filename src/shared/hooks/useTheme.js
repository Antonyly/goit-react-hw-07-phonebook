import { useState, useLayoutEffect } from "react";

// export const useTheme = () => {
//     const [theme, setTheme] = useState('light');

//     useLayoutEffect(() => {
//         document.documentElement.setAttribute('data-theme', theme)
//     }, [theme])
//     return { theme, setTheme };
// };


// const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches
// const defaultTheme = isDarkTheme ? 'dark' : 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme')
  )

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])

  return { theme, setTheme }
}
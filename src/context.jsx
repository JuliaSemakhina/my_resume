import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    
    const getStorageTheme = () => {
        let theme = 'light-theme';
        if (localStorage.getItem('theme')) {
          theme = localStorage.getItem('theme');
        }
        return theme;
      };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page: '', links: []});
    // const [theme, setTheme] = useState(getStorageTheme());
    const [isLoading, setLoading] = useState(true);
  
    // useEffect(() => {
    //   document.documentElement.className = theme;
    //   localStorage.setItem('theme', theme);
    // }, [theme]);

    // const toggleTheme = () => {
    //   if (theme === 'light-theme') {
    //     setTheme('dark-theme');
    //   } else {
    //     setTheme('light-theme');
    //   }
    // };

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light-theme');

    useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }, [theme]);
    
  const toggleTheme = () => {
    setTheme(prev => prev === 'light-theme' ? 'dark-theme' : 'light-theme');
  };

const openSidebar = () => {
        setIsSidebarOpen(true);
      };

const closeSidebar = () => {
        setIsSidebarOpen(false);
      };

    return (
        <AppContext.Provider value={{
             isSidebarOpen, openSidebar, closeSidebar, location, page, toggleTheme, isLoading
        }} >
            {children}
        </AppContext.Provider>
    ); 
};


//custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export {AppContext, AppProvider};
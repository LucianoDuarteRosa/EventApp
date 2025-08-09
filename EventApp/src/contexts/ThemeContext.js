import React, { createContext, useState, useContext } from 'react';
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const lightTheme = {
        ...MD3LightTheme,
        colors: {
            ...MD3LightTheme.colors,
            primary: '#6200ea',
            secondary: '#03dac6',
            surface: '#ffffff',
            background: '#f5f5f5',
        },
    };

    const darkTheme = {
        ...MD3DarkTheme,
        colors: {
            ...MD3DarkTheme.colors,
            primary: '#bb86fc',
            secondary: '#03dac6',
            surface: '#1e1e1e',
            background: '#121212',
        },
    };

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const theme = isDarkTheme ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider
            value={{
                theme,
                isDarkTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

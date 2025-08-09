import React from 'react';
import { Switch } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ThemeToggle = () => {
    const { isDarkTheme, toggleTheme, theme } = useTheme();

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name={isDarkTheme ? 'weather-night' : 'weather-sunny'}
                size={24}
                color={theme.colors.onSurface}
                style={styles.icon}
            />
            <Switch
                value={isDarkTheme}
                onValueChange={toggleTheme}
                color={theme.colors.primary}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    icon: {
        marginRight: 8,
    },
});

export default ThemeToggle;

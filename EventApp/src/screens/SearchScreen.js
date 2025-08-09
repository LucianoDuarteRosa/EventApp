import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Surface, Searchbar } from 'react-native-paper';
import { useTheme } from '../contexts/ThemeContext';

const SearchScreen = () => {
    const { theme } = useTheme();
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="Pesquisar eventos, serviços, produtos..."
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={[styles.searchbar, { backgroundColor: theme.colors.surface }]}
                />
            </View>

            <View style={styles.content}>
                <Surface style={[styles.surface, { backgroundColor: theme.colors.surface }]}>
                    <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.onSurface }]}>
                        Pesquisar
                    </Text>
                    <Text variant="bodyLarge" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
                        Digite algo na barra de pesquisa para começar
                    </Text>
                </Surface>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        padding: 16,
    },
    searchbar: {
        elevation: 2,
    },
    content: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    surface: {
        padding: 24,
        borderRadius: 12,
        elevation: 4,
        alignItems: 'center',
        minWidth: 250,
    },
    title: {
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
    },
});

export default SearchScreen;

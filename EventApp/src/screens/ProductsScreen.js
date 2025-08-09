import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, Surface } from 'react-native-paper';
import { useTheme } from '../contexts/ThemeContext';

const ProductsScreen = ({ navigation }) => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Appbar.Header style={{ backgroundColor: theme.colors.surface }}>
                <Appbar.Action
                    icon="menu"
                    onPress={() => navigation.openDrawer()}
                    iconColor={theme.colors.onSurface}
                />
                <Appbar.Content title="Produtos" titleStyle={{ color: theme.colors.onSurface }} />
            </Appbar.Header>

            <View style={styles.content}>
                <Surface style={[styles.surface, { backgroundColor: theme.colors.surface }]}>
                    <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.onSurface }]}>
                        Produtos
                    </Text>
                    <Text variant="bodyLarge" style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}>
                        Esta página está em desenvolvimento
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

export default ProductsScreen;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Surface, List, Avatar } from 'react-native-paper';
import { useTheme } from '../contexts/ThemeContext';

const ProfileScreen = () => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.header}>
                <Surface style={[styles.profileSurface, { backgroundColor: theme.colors.surface }]}>
                    <Avatar.Icon
                        size={80}
                        icon="account"
                        style={{ backgroundColor: theme.colors.primary }}
                    />
                    <Text variant="headlineSmall" style={[styles.userName, { color: theme.colors.onSurface }]}>
                        João Silva
                    </Text>
                    <Text variant="bodyMedium" style={[styles.userEmail, { color: theme.colors.onSurfaceVariant }]}>
                        joao.silva@email.com
                    </Text>
                </Surface>
            </View>

            <View style={styles.content}>
                <List.Section>
                    <List.Item
                        title="Meus Eventos"
                        description="Eventos que participo"
                        left={props => <List.Icon {...props} icon="calendar-multiple" color={theme.colors.primary} />}
                        titleStyle={{ color: theme.colors.onSurface }}
                        descriptionStyle={{ color: theme.colors.onSurfaceVariant }}
                    />
                    <List.Item
                        title="Favoritos"
                        description="Itens salvos"
                        left={props => <List.Icon {...props} icon="heart-outline" color={theme.colors.primary} />}
                        titleStyle={{ color: theme.colors.onSurface }}
                        descriptionStyle={{ color: theme.colors.onSurfaceVariant }}
                    />
                    <List.Item
                        title="Configurações"
                        description="Preferências do app"
                        left={props => <List.Icon {...props} icon="cog-outline" color={theme.colors.primary} />}
                        titleStyle={{ color: theme.colors.onSurface }}
                        descriptionStyle={{ color: theme.colors.onSurfaceVariant }}
                    />
                </List.Section>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 16,
    },
    profileSurface: {
        padding: 24,
        borderRadius: 12,
        elevation: 4,
        alignItems: 'center',
    },
    userName: {
        marginTop: 12,
        marginBottom: 4,
        textAlign: 'center',
    },
    userEmail: {
        textAlign: 'center',
    },
    content: {
        flex: 1,
        paddingHorizontal: 16,
    },
});

export default ProfileScreen;

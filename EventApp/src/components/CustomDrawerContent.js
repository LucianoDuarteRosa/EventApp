import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { useTheme } from '../contexts/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CustomDrawerContent = (props) => {
    const { theme, isDarkTheme, toggleTheme } = useTheme();

    return (
        <View style={[styles.drawerContent, { backgroundColor: theme.colors.surface }]}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.userInfo}>
                            <Avatar.Icon
                                size={60}
                                icon="account"
                                style={{ backgroundColor: theme.colors.primary }}
                            />
                            <View style={styles.userDetails}>
                                <Title style={[styles.title, { color: theme.colors.onSurface }]}>
                                    João Silva
                                </Title>
                                <Caption style={[styles.caption, { color: theme.colors.onSurfaceVariant }]}>
                                    joao.silva@email.com
                                </Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="home-outline" color={color} size={size} />
                            )}
                            label="Home"
                            onPress={() => props.navigation.navigate('HomeTab')}
                            labelStyle={{ color: theme.colors.onSurface }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="calendar-multiple" color={color} size={size} />
                            )}
                            label="Eventos"
                            onPress={() => props.navigation.navigate('Events')}
                            labelStyle={{ color: theme.colors.onSurface }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
                            )}
                            label="Serviços"
                            onPress={() => props.navigation.navigate('Services')}
                            labelStyle={{ color: theme.colors.onSurface }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <MaterialCommunityIcons name="shopping-outline" color={color} size={size} />
                            )}
                            label="Produtos"
                            onPress={() => props.navigation.navigate('Products')}
                            labelStyle={{ color: theme.colors.onSurface }}
                        />
                    </Drawer.Section>

                    <Drawer.Section title="Configurações">
                        <TouchableRipple onPress={toggleTheme}>
                            <View style={styles.preference}>
                                <Text style={{ color: theme.colors.onSurface }}>Tema Escuro</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} color={theme.colors.primary} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userDetails: {
        marginLeft: 15,
        flexDirection: 'column',
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default CustomDrawerContent;

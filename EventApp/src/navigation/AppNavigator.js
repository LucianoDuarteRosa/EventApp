import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../contexts/ThemeContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Components
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator para a Home (sem pesquisa)
const HomeTabNavigator = () => {
    const { theme } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account' : 'account-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
                tabBarStyle: {
                    backgroundColor: theme.colors.surface,
                    borderTopColor: theme.colors.outline,
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Perfil' }}
            />
        </Tab.Navigator>
    );
};

// Tab Navigator para telas com pesquisa
const EventsTabNavigator = () => {
    const { theme } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'EventsMain') {
                        iconName = focused ? 'calendar-multiple' : 'calendar-multiple-check';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'magnify' : 'magnify';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account' : 'account-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
                tabBarStyle: {
                    backgroundColor: theme.colors.surface,
                    borderTopColor: theme.colors.outline,
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                headerShown: false,
            })}
            initialRouteName="EventsMain"
        >
            <Tab.Screen
                name="EventsMain"
                component={EventsScreen}
                options={{ tabBarLabel: 'Eventos' }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{ tabBarLabel: 'Pesquisar' }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Perfil' }}
            />
        </Tab.Navigator>
    );
};

const ServicesTabNavigator = () => {
    const { theme } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'ServicesMain') {
                        iconName = focused ? 'cog' : 'cog-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'magnify' : 'magnify';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account' : 'account-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
                tabBarStyle: {
                    backgroundColor: theme.colors.surface,
                    borderTopColor: theme.colors.outline,
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                headerShown: false,
            })}
            initialRouteName="ServicesMain"
        >
            <Tab.Screen
                name="ServicesMain"
                component={ServicesScreen}
                options={{ tabBarLabel: 'Serviços' }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{ tabBarLabel: 'Pesquisar' }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Perfil' }}
            />
        </Tab.Navigator>
    );
};

const ProductsTabNavigator = () => {
    const { theme } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'ProductsMain') {
                        iconName = focused ? 'shopping' : 'shopping-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'magnify' : 'magnify';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account' : 'account-outline';
                    }

                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
                tabBarStyle: {
                    backgroundColor: theme.colors.surface,
                    borderTopColor: theme.colors.outline,
                    height: 65,
                    paddingBottom: 10,
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                headerShown: false,
            })}
            initialRouteName="ProductsMain"
        >
            <Tab.Screen
                name="ProductsMain"
                component={ProductsScreen}
                options={{ tabBarLabel: 'Produtos' }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{ tabBarLabel: 'Pesquisar' }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Perfil' }}
            />
        </Tab.Navigator>
    );
};

const AppNavigator = () => {
    const { theme } = useTheme();

    return (
        <NavigationContainer theme={theme}>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerStyle: {
                        backgroundColor: theme.colors.surface,
                    },
                    drawerActiveTintColor: theme.colors.primary,
                    drawerInactiveTintColor: theme.colors.onSurfaceVariant,
                }}
            >
                <Drawer.Screen
                    name="HomeTab"
                    component={HomeTabNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name="Events"
                    component={EventsTabNavigator}
                    options={{ title: 'Eventos' }}
                />
                <Drawer.Screen
                    name="Services"
                    component={ServicesTabNavigator}
                    options={{ title: 'Serviços' }}
                />
                <Drawer.Screen
                    name="Products"
                    component={ProductsTabNavigator}
                    options={{ title: 'Produtos' }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

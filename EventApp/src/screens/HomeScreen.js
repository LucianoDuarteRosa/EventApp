import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {
    Card,
    Title,
    Paragraph,
    Button,
    Appbar,
    Surface,
    Text
} from 'react-native-paper';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { theme } = useTheme();

    const navigateToSection = (section) => {
        navigation.navigate(section);
    };

    const cardData = [
        {
            title: 'Eventos',
            description: 'Descubra os melhores eventos da sua cidade',
            icon: 'calendar-multiple',
            color: '#e74c3c',
            onPress: () => navigateToSection('Events'),
        },
        {
            title: 'Serviços',
            description: 'Encontre serviços profissionais de qualidade',
            icon: 'cog-outline',
            color: '#3498db',
            onPress: () => navigateToSection('Services'),
        },
        {
            title: 'Produtos',
            description: 'Explore nossa variedade de produtos',
            icon: 'shopping-outline',
            color: '#2ecc71',
            onPress: () => navigateToSection('Products'),
        },
    ];

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Appbar.Header style={{ backgroundColor: theme.colors.surface }}>
                <Appbar.Content title="EventApp" titleStyle={{ color: theme.colors.onSurface }} />
                <ThemeToggle />
            </Appbar.Header>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Surface style={[styles.heroSection, { backgroundColor: theme.colors.surface }]}>
                    <Title style={[styles.heroTitle, { color: theme.colors.onSurface }]}>
                        Bem-vindo ao EventApp
                    </Title>
                    <Paragraph style={[styles.heroSubtitle, { color: theme.colors.onSurfaceVariant }]}>
                        Sua plataforma completa para eventos, serviços e produtos
                    </Paragraph>
                </Surface>

                <View style={styles.cardsContainer}>
                    {cardData.map((card, index) => (
                        <Card
                            key={index}
                            style={[
                                styles.card,
                                { backgroundColor: theme.colors.surface, marginBottom: 16 }
                            ]}
                            onPress={card.onPress}
                        >
                            <Card.Content style={styles.cardContent}>
                                <View style={styles.cardHeader}>
                                    <MaterialCommunityIcons name={card.icon} size={40} color={card.color} />
                                    <View style={styles.cardTextContainer}>
                                        <Title style={[styles.cardTitle, { color: theme.colors.onSurface }]}>
                                            {card.title}
                                        </Title>
                                        <Paragraph style={[styles.cardDescription, { color: theme.colors.onSurfaceVariant }]}>
                                            {card.description}
                                        </Paragraph>
                                    </View>
                                </View>
                            </Card.Content>
                            <Card.Actions>
                                <Button
                                    mode="contained"
                                    onPress={card.onPress}
                                    style={[styles.cardButton, { backgroundColor: card.color }]}
                                    labelStyle={{ color: '#ffffff' }}
                                >
                                    Explorar
                                </Button>
                            </Card.Actions>
                        </Card>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    heroSection: {
        padding: 24,
        margin: 16,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 2,
    },
    heroTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    heroSubtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 16,
    },
    cardsContainer: {
        paddingHorizontal: 16,
    },
    card: {
        elevation: 4,
        borderRadius: 12,
    },
    cardContent: {
        padding: 16,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardTextContainer: {
        flex: 1,
        marginLeft: 16,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 14,
        lineHeight: 20,
    },
    cardButton: {
        borderRadius: 8,
        marginHorizontal: 16,
        marginBottom: 8,
    },
});

export default HomeScreen;

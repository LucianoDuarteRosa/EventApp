import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
  Platform
} from 'react-native';

// Componente de Toggle de Tema
const ThemeToggle = ({ isDark, onToggle }) => (
  <TouchableOpacity
    style={[styles.themeToggle, isDark && styles.themeToggleDark]}
    onPress={() => {
      console.log('ThemeToggle pressionado, isDark atual:', isDark);
      onToggle();
    }}
    activeOpacity={0.7}
  >
    <Text style={[styles.themeIcon, { color: isDark ? '#fff' : '#333' }]}>
      {isDark ? '☀️' : '🌙'}
    </Text>
  </TouchableOpacity>
);

// Tela Home
const HomeScreen = ({ onNavigate, isDark, onToggleTheme }) => (
  <View style={[styles.container, isDark && styles.containerDark]}>
    <View style={[styles.header, isDark && styles.headerDark]}>
      <Text style={[styles.headerTitle, isDark && styles.textDark]}>EventApp</Text>
      <View style={styles.headerRight}>
        <Text style={[styles.debugText, isDark && styles.textDark]}>
          {isDark ? 'Escuro' : 'Claro'}
        </Text>
        <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
      </View>
    </View>

    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={[styles.heroSection, isDark && styles.heroSectionDark]}>
        <Text style={[styles.heroTitle, isDark && styles.textDark]}>
          Bem-vindo ao EventApp
        </Text>
        <Text style={[styles.heroSubtitle, isDark && styles.textSecondaryDark]}>
          Sua plataforma completa para eventos, serviços e produtos
        </Text>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={[styles.card, isDark && styles.cardDark]}
          onPress={() => onNavigate('Events')}
        >
          <Text style={styles.cardIcon}>📅</Text>
          <Text style={[styles.cardTitle, isDark && styles.textDark]}>Eventos</Text>
          <Text style={[styles.cardDescription, isDark && styles.textSecondaryDark]}>
            Descubra os melhores eventos da sua cidade
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, isDark && styles.cardDark]}
          onPress={() => onNavigate('Services')}
        >
          <Text style={styles.cardIcon}>⚙️</Text>
          <Text style={[styles.cardTitle, isDark && styles.textDark]}>Serviços</Text>
          <Text style={[styles.cardDescription, isDark && styles.textSecondaryDark]}>
            Encontre serviços profissionais de qualidade
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.card, isDark && styles.cardDark]}
          onPress={() => onNavigate('Products')}
        >
          <Text style={styles.cardIcon}>🛍️</Text>
          <Text style={[styles.cardTitle, isDark && styles.textDark]}>Produtos</Text>
          <Text style={[styles.cardDescription, isDark && styles.textSecondaryDark]}>
            Explore nossa variedade de produtos
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>

    {/* Barra Inferior - Só Home e Perfil */}
    <View style={[styles.bottomTab, isDark && styles.bottomTabDark]}>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={[styles.tabIcon, styles.tabIconActive]}>🏠</Text>
        <Text style={[styles.tabText, styles.tabTextActive]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onNavigate('Profile')}
      >
        <Text style={[styles.tabIcon, isDark && styles.textSecondaryDark]}>👤</Text>
        <Text style={[styles.tabText, isDark && styles.textSecondaryDark]}>Perfil</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Tela com Menu Hambúrguer
const ScreenWithMenu = ({ title, icon, onNavigate, onOpenMenu, isDark, children }) => (
  <View style={[styles.container, isDark && styles.containerDark]}>
    <View style={[styles.header, isDark && styles.headerDark]}>
      <TouchableOpacity
        onPress={onOpenMenu}
        style={styles.menuButton}
        activeOpacity={0.7}
      >
        <Text style={[styles.menuIcon, isDark && styles.textDark]}>☰</Text>
      </TouchableOpacity>
      <Text style={[styles.headerTitle, isDark && styles.textDark]}>{title}</Text>
      <View style={{ width: 44 }} />
    </View>

    <View style={styles.content}>
      <View style={[styles.emptyState, isDark && styles.emptyStateDark]}>
        <Text style={styles.emptyIcon}>{icon}</Text>
        <Text style={[styles.emptyTitle, isDark && styles.textDark]}>{title}</Text>
        <Text style={[styles.emptySubtitle, isDark && styles.textSecondaryDark]}>
          Esta página está em desenvolvimento
        </Text>
      </View>
      {children}
    </View>

    {/* Barra Inferior com Pesquisa */}
    <View style={[styles.bottomTab, isDark && styles.bottomTabDark]}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onNavigate('Home')}
      >
        <Text style={[styles.tabIcon, isDark && styles.textSecondaryDark]}>🏠</Text>
        <Text style={[styles.tabText, isDark && styles.textSecondaryDark]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onNavigate('Search')}
      >
        <Text style={[styles.tabIcon, isDark && styles.textSecondaryDark]}>🔍</Text>
        <Text style={[styles.tabText, isDark && styles.textSecondaryDark]}>Pesquisar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onNavigate('Profile')}
      >
        <Text style={[styles.tabIcon, isDark && styles.textSecondaryDark]}>👤</Text>
        <Text style={[styles.tabText, isDark && styles.textSecondaryDark]}>Perfil</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Tela de Pesquisa
const SearchScreen = ({ onNavigate, isDark }) => (
  <View style={[styles.container, isDark && styles.containerDark]}>
    <View style={[styles.header, isDark && styles.headerDark]}>
      <Text style={[styles.headerTitle, isDark && styles.textDark]}>Pesquisar</Text>
    </View>

    <View style={styles.content}>
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchInput, isDark && styles.searchInputDark]}
          placeholder="Pesquisar eventos, serviços, produtos..."
          placeholderTextColor={isDark ? '#999' : '#666'}
        />
      </View>

      <View style={[styles.emptyState, isDark && styles.emptyStateDark]}>
        <Text style={styles.emptyIcon}>🔍</Text>
        <Text style={[styles.emptyTitle, isDark && styles.textDark]}>Pesquisar</Text>
        <Text style={[styles.emptySubtitle, isDark && styles.textSecondaryDark]}>
          Digite algo na barra de pesquisa para começar
        </Text>
      </View>
    </View>

    <View style={[styles.bottomTab, isDark && styles.bottomTabDark]}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onNavigate('Home')}
      >
        <Text style={[styles.tabIcon, isDark && styles.textSecondaryDark]}>🏠</Text>
        <Text style={[styles.tabText, isDark && styles.textSecondaryDark]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={[styles.tabIcon, styles.tabIconActive]}>🔍</Text>
        <Text style={[styles.tabText, styles.tabTextActive]}>Pesquisar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onNavigate('Profile')}
      >
        <Text style={[styles.tabIcon, isDark && styles.textSecondaryDark]}>👤</Text>
        <Text style={[styles.tabText, isDark && styles.textSecondaryDark]}>Perfil</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Tela de Perfil
const ProfileScreen = ({ onNavigate, isDark }) => (
  <View style={[styles.container, isDark && styles.containerDark]}>
    <View style={[styles.header, isDark && styles.headerDark]}>
      <Text style={[styles.headerTitle, isDark && styles.textDark]}>Perfil</Text>
    </View>

    <View style={styles.content}>
      <View style={[styles.profileSection, isDark && styles.profileSectionDark]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JS</Text>
        </View>
        <Text style={[styles.userName, isDark && styles.textDark]}>João Silva</Text>
        <Text style={[styles.userEmail, isDark && styles.textSecondaryDark]}>
          joao.silva@email.com
        </Text>
      </View>

      <View style={styles.menuList}>
        <TouchableOpacity style={[styles.menuItem, isDark && styles.menuItemDark]}>
          <Text style={styles.menuItemIcon}>📅</Text>
          <View>
            <Text style={[styles.menuItemTitle, isDark && styles.textDark]}>
              Meus Eventos
            </Text>
            <Text style={[styles.menuItemDescription, isDark && styles.textSecondaryDark]}>
              Eventos que participo
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, isDark && styles.menuItemDark]}>
          <Text style={styles.menuItemIcon}>❤️</Text>
          <View>
            <Text style={[styles.menuItemTitle, isDark && styles.textDark]}>
              Favoritos
            </Text>
            <Text style={[styles.menuItemDescription, isDark && styles.textSecondaryDark]}>
              Itens salvos
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, isDark && styles.menuItemDark]}>
          <Text style={styles.menuItemIcon}>⚙️</Text>
          <View>
            <Text style={[styles.menuItemTitle, isDark && styles.textDark]}>
              Configurações
            </Text>
            <Text style={[styles.menuItemDescription, isDark && styles.textSecondaryDark]}>
              Preferências do app
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>

    {/* Barra Inferior - Na tela de perfil, só Home e Perfil */}
    <View style={[styles.bottomTab, isDark && styles.bottomTabDark]}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => onNavigate('Home')}
      >
        <Text style={[styles.tabIcon, isDark && styles.textSecondaryDark]}>🏠</Text>
        <Text style={[styles.tabText, isDark && styles.textSecondaryDark]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={[styles.tabIcon, styles.tabIconActive]}>👤</Text>
        <Text style={[styles.tabText, styles.tabTextActive]}>Perfil</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// Menu Drawer
const DrawerMenu = ({ isVisible, onClose, onNavigate, isDark }) => {
  if (!isVisible) return null;

  return (
    <View style={styles.overlay}>
      <TouchableOpacity style={styles.overlayBackground} onPress={onClose} />
      <View style={[styles.drawer, isDark && styles.drawerDark]}>
        <View style={[styles.drawerHeader, isDark && styles.drawerHeaderDark]}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JS</Text>
          </View>
          <Text style={[styles.drawerUserName, isDark && styles.textDark]}>João Silva</Text>
          <Text style={[styles.drawerUserEmail, isDark && styles.textSecondaryDark]}>
            joao.silva@email.com
          </Text>
        </View>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => { onNavigate('Home'); onClose(); }}
        >
          <Text style={styles.drawerItemIcon}>🏠</Text>
          <Text style={[styles.drawerItemText, isDark && styles.textDark]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => { onNavigate('Events'); onClose(); }}
        >
          <Text style={styles.drawerItemIcon}>📅</Text>
          <Text style={[styles.drawerItemText, isDark && styles.textDark]}>Eventos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => { onNavigate('Services'); onClose(); }}
        >
          <Text style={styles.drawerItemIcon}>⚙️</Text>
          <Text style={[styles.drawerItemText, isDark && styles.textDark]}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => { onNavigate('Products'); onClose(); }}
        >
          <Text style={styles.drawerItemIcon}>🛍️</Text>
          <Text style={[styles.drawerItemText, isDark && styles.textDark]}>Produtos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// App Principal
export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleTheme = () => {
    console.log('Toggle theme - antes:', isDarkTheme);
    setIsDarkTheme(prev => {
      const newValue = !prev;
      console.log('Toggle theme - depois:', newValue);
      return newValue;
    });
  };
  const openMenu = () => setIsMenuVisible(true);
  const closeMenu = () => setIsMenuVisible(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return (
          <HomeScreen
            onNavigate={setCurrentScreen}
            isDark={isDarkTheme}
            onToggleTheme={toggleTheme}
          />
        );
      case 'Events':
        return (
          <ScreenWithMenu
            title="Eventos"
            icon="📅"
            onNavigate={setCurrentScreen}
            onOpenMenu={openMenu}
            isDark={isDarkTheme}
          />
        );
      case 'Services':
        return (
          <ScreenWithMenu
            title="Serviços"
            icon="⚙️"
            onNavigate={setCurrentScreen}
            onOpenMenu={openMenu}
            isDark={isDarkTheme}
          />
        );
      case 'Products':
        return (
          <ScreenWithMenu
            title="Produtos"
            icon="🛍️"
            onNavigate={setCurrentScreen}
            onOpenMenu={openMenu}
            isDark={isDarkTheme}
          />
        );
      case 'Search':
        return (
          <SearchScreen
            onNavigate={setCurrentScreen}
            isDark={isDarkTheme}
          />
        );
      case 'Profile':
        return (
          <ProfileScreen
            onNavigate={setCurrentScreen}
            isDark={isDarkTheme}
          />
        );
      default:
        return (
          <HomeScreen
            onNavigate={setCurrentScreen}
            isDark={isDarkTheme}
            onToggleTheme={toggleTheme}
          />
        );
    }
  };

  return (
    <SafeAreaView style={[styles.app, isDarkTheme && styles.appDark]}>
      {renderScreen()}
      <DrawerMenu
        isVisible={isMenuVisible}
        onClose={closeMenu}
        onNavigate={setCurrentScreen}
        isDark={isDarkTheme}
      />
      <StatusBar style={isDarkTheme ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  appDark: {
    backgroundColor: '#121212',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerDark: {
    backgroundColor: '#1e1e1e',
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  debugText: {
    fontSize: 12,
    color: '#666',
  },
  menuIcon: {
    fontSize: 24,
    color: '#333',
    paddingHorizontal: 12,
    paddingVertical: 8,
    minWidth: 44,
    minHeight: 44,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 44,
    minHeight: 44,
  },
  themeToggle: {
    padding: 12,
    borderRadius: 8,
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  themeToggleDark: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  themeIcon: {
    fontSize: 24,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  heroSection: {
    padding: 24,
    margin: 16,
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  heroSectionDark: {
    backgroundColor: '#1e1e1e',
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  heroSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
  cardsContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardDark: {
    backgroundColor: '#1e1e1e',
  },
  cardIcon: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    lineHeight: 20,
  },
  bottomTab: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 12,
    paddingBottom: Platform.OS === 'android' ? 25 : 20,
  },
  bottomTabDark: {
    backgroundColor: '#1e1e1e',
    borderTopColor: '#333',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
    color: '#666',
  },
  tabIconActive: {
    color: '#6200ea',
  },
  tabText: {
    fontSize: 12,
    color: '#666',
  },
  tabTextActive: {
    color: '#6200ea',
    fontWeight: 'bold',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  emptyStateDark: {
    backgroundColor: '#1e1e1e',
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  emptySubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchInputDark: {
    backgroundColor: '#1e1e1e',
    borderColor: '#333',
    color: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileSectionDark: {
    backgroundColor: '#1e1e1e',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6200ea',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  menuList: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItemDark: {
    backgroundColor: '#1e1e1e',
  },
  menuItemIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  menuItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  overlayBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 280,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 60 : 50,
  },
  drawerDark: {
    backgroundColor: '#1e1e1e',
  },
  drawerHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
    marginBottom: 20,
  },
  drawerHeaderDark: {
    borderBottomColor: '#333',
  },
  drawerUserName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    color: '#333',
  },
  drawerUserEmail: {
    fontSize: 14,
    color: '#666',
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 12,
    borderRadius: 8,
    minHeight: 56,
  },
  drawerItemIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
  },
  textDark: {
    color: '#fff',
  },
  textSecondaryDark: {
    color: '#999',
  },
});

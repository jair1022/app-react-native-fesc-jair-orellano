import { View, Text, StyleSheet, Alert } from 'react-native';
import { WelcomeCard } from '../../src/components/WelcomeCard';
import { Colors } from '../../src/styles/colors';

export default function TabOneScreen() {
  const handleStart = () => {
    Alert.alert('Listo', 'Botón presionado correctamente ✅');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Diseño Móvil - React Native</Text>

      <WelcomeCard
        userName="Jair Fernando Orellano"
        onGetStarted={handleStart}
      />

      <Text style={styles.footer}>FESC - 2026</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 10,
    textAlign: 'center',
  },
  footer: {
    marginTop: 10,
    color: Colors.gray,
  },
});
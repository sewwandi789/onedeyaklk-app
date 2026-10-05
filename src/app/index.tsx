import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Replaces splash screen with login screen
      router.replace('/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient colors={['#0F4A5C', '#082C38']} style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0F4A5C" />
      <View style={styles.content}>
        <Image
          source={require('@/assets/images/Onadeyak LK Logo _ White.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.tagline}>
          Buy & Sell <Text style={styles.highlight}>Anything</Text>
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  logo: { width: 220, height: 120 },
  tagline: { marginTop: 20, fontSize: 20, color: '#FFFFFF', fontWeight: '500' },
  highlight: { fontWeight: 'bold' },
});
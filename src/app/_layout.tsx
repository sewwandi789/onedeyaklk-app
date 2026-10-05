// app/_layout.tsx
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Splash screen is the entry point */}
        <Stack.Screen name="index" />
        {/* Login route */}
        <Stack.Screen name="login" />
        {/* Main app tab routes */}
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
}
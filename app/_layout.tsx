import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useAuth } from '../src/hooks/useAuth';
import "./global.css";

const queryClient = new QueryClient();

function AuthGate() {
  const { session, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;                       // wait for the first check
    const inApp = segments[0] === '(app)';
    if (session && !inApp) router.replace('/(app)/tabs');
    if (!session && inApp) router.replace('/(auth)/login'); // logged out → auth
  }, [session, loading, segments]);

  return <Slot />;   // renders whatever child route is active
}



export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  
  if (!fontsLoaded) return null;
  return (
    <QueryClientProvider client={queryClient}>
      <AuthGate />
    </QueryClientProvider>
  );
}

// function RootLayoutNav() {

//   return (
//       <Stack>
//         <Stack.Screen name="(app)" options={{ headerShown: false }} />
//         <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//         <Stack.Screen name="pair" options={{ headerShown: false }} />
//       </Stack>
//   );
// }

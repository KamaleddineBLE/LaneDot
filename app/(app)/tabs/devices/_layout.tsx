import { Stack } from 'expo-router';

export default function DevicesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Connecting', headerShown: false }} />
      <Stack.Screen name="[id]" options={{ title: 'Scan Device' , headerShown: false}} />
      
    </Stack>
  );
}
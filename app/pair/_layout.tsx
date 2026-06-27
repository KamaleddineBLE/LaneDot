import { Stack } from 'expo-router';

export default function PairLayout() {
  return (
    <Stack>
      <Stack.Screen name="scan" options={{ title: 'Scan Device' }} />
      <Stack.Screen name="connecting" options={{ title: 'Connecting' }} />
      <Stack.Screen name="configure" options={{ title: 'Configure' }} />
    </Stack>
  );
}
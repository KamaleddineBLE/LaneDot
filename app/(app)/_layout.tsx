import { Tabs } from 'expo-router';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="map" options={{ title: 'Map' }} />
      <Tabs.Screen name="devices" options={{ title: 'Devices' }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
      <Tabs.Screen name="devices/[id]" options={{ href: null }} />
    </Tabs>
  );
}
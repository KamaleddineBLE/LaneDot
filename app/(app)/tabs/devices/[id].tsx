import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function DeviceDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Device Detail — ID: {id}</Text>
    </View>
  );
}
import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
 
export default function MapScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Map Screen</Text>
      <Button title=" Profile" onPress={() => router.push('/profile')} />
    </View>
  );
}
 
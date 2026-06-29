import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
 
export default function DevicesScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Devices Screen</Text>
        <Button title=" Device 2 Detail" onPress={() => router.push('/devices/2')} />
        <Button title=" Device 3 Detail" onPress={() => router.push('/devices/3')} />
        <Button title=" Device 4 Detail" onPress={() => router.push('/devices/4')} />
        <Button title=" Device 5 Detail" onPress={() => router.push('/devices/5')} />

    </View>
  );
}
 
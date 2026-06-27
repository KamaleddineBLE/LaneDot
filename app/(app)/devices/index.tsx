import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';
 
export default function DevicesScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Devices Screen</Text>
      <Button title="Go to Device Detail" onPress={() => router.push('/pair/scan')} />
    </View>
  );
}
 
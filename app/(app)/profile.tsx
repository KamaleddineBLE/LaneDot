import { Alert, Pressable, Text, View } from 'react-native';
import { signOut } from '../../src/services/auth';

export default function Profile() {
  async function handleSignOut() {
    try {
      await signOut();
      // no manual navigation — the gate sees the session clear and redirects
    } catch (e: any) {
      Alert.alert('Sign out failed', e.message);
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>Profile</Text>
      <Pressable
        onPress={handleSignOut}
        style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 8, paddingVertical: 14, paddingHorizontal: 28 }}
      >
        <Text style={{ color: '#E5484D', fontWeight: '500' }}>Sign out</Text>
      </Pressable>
    </View>
  );
}
import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { signUp } from '../../src/services/auth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignup() {
    setLoading(true);
    try {
      await signUp(email, password);
      // if "Confirm email" is OFF in Supabase, a session is created and
      // the gate redirects automatically. If ON, no session yet — see note.
      Alert.alert('Account created', 'You can now sign in.');
    } catch (e: any) {
      Alert.alert('Signup failed', e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 12 }}>
        Create account
      </Text>

      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 8, padding: 14 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, borderColor: '#EAEAEA', borderRadius: 8, padding: 14 }}
      />

      <Pressable
        onPress={handleSignup}
        disabled={loading}
        style={{ backgroundColor: '#0A0A0A', borderRadius: 8, padding: 16, alignItems: 'center', opacity: loading ? 0.6 : 1 }}
      >
        <Text style={{ color: '#fff', fontWeight: '500' }}>
          {loading ? 'Creating…' : 'Create account'}
        </Text>
      </Pressable>

      <Link href="/(auth)/login" style={{ textAlign: 'center', marginTop: 8, color: '#6B7280' }}>
        Already have an account? Sign in
      </Link>
    </View>
  );
}
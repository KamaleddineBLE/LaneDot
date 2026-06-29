import { Link } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { signIn } from '../../src/services/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    try {
      await signIn(email, password);
      // no manual navigation — the auth gate redirects on session change
    } catch (e: any) {
      Alert.alert('Login failed', e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24, gap: 12 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 12 }}>
        Sign in
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
        onPress={handleLogin}
        disabled={loading}
        style={{ backgroundColor: '#0A0A0A', borderRadius: 8, padding: 16, alignItems: 'center', opacity: loading ? 0.6 : 1 }}
      >
        <Text style={{ color: '#fff', fontWeight: '500' }}>
          {loading ? 'Signing in…' : 'Sign in'}
        </Text>
      </Pressable>

      <Link href="/(auth)/signup" style={{ textAlign: 'center', marginTop: 8, color: '#6B7280' }}>
        Don't have an account? Sign up
      </Link>
    </View>
  );
}
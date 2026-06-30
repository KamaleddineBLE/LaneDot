import { Link } from 'expo-router';
import { Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import { signIn } from '../../src/services/auth';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const emailIsValid = EMAIL_REGEX.test(email);
  const showEmailError = emailTouched && email.length > 0 && !emailIsValid;

  async function handleLogin() {
    setEmailTouched(true);
    if (!emailIsValid || password.length === 0) return;

    setLoading(true);
    try {
      await signIn(email, password);
    } catch (e: any) {
      Alert.alert('Login failed', e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View className="flex-1 p-6 gap-3" style={{ marginTop: '10%' }}>
      <Image
        source={require('../../assets/images/Logo.png')}
        style={{ width: 120, height: 120 }}
        resizeMode="contain"
      />

      <View className="flex flex-col mb-10">
        <Text className="font-bold text-extralarge text-ink">Welcome back</Text>
        <Text className="font-regular text-medium text-ink30">
          Sign in to keep tracking
        </Text>
      </View>

      <Text className="font-semibold text-small text-ink20">EMAIL</Text>
      <TextInput
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        onBlur={() => setEmailTouched(true)}
        editable={!loading}
        className={`border rounded-lg p-4 font-regular text-medium text-ink ${
          showEmailError ? 'border-alert' : 'border-hairline'
        }`}
      />
      {showEmailError && (
        <Text className="font-semibold text-small text-alert mb-2">
          Enter a valid email address
        </Text>
      )}

      <Text className="font-semibold text-small text-ink20">PASSWORD</Text>
      <View className="relative justify-center">
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          editable={!loading}
          className="border border-hairline rounded-lg p-4 pr-12 font-regular text-medium text-ink"
        />
        <Pressable
          onPress={() => setShowPassword((v) => !v)}
          className="absolute right-4"
          hitSlop={10}
          accessibilityLabel={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <EyeOff size={20} color="#A1A1AA" strokeWidth={1.75} />
          ) : (
            <Eye size={20} color="#A1A1AA" strokeWidth={1.75} />
          )}
        </Pressable>
      </View>

      <Pressable
        onPress={handleLogin}
        disabled={loading}
        className="bg-ink rounded-lg p-4 items-center mt-2"
        style={{ opacity: loading ? 0.6 : 1 }}
      >
        <Text className="font-medium text-pureWhite">
          {loading ? 'Signing in…' : 'Sign in'}
        </Text>
      </Pressable>

      <Link href="/(auth)/signup" className="mt-4">
        <Text className="font-regular text-medium text-ink30 text-center">
          Don't have an account?{' '}
        </Text>
        <Text className="font-semibold text-medium text-ink">Sign up</Text>
      </Link>
    </View>
  );
}
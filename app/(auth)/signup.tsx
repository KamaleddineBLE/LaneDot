import { Link } from 'expo-router';
import { Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, Image, Pressable, Text, TextInput, View } from 'react-native';
import { signUp } from '../../src/services/auth';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmTouched, setConfirmTouched] = useState(false);

  const nameIsValid = name.trim().length > 0;
  const emailIsValid = EMAIL_REGEX.test(email);
  const passwordIsValid = password.length >= MIN_PASSWORD_LENGTH;
  const passwordsMatch = password === confirmPassword;

  const showNameError = nameTouched && !nameIsValid;
  const showEmailError = emailTouched && email.length > 0 && !emailIsValid;
  const showPasswordError = passwordTouched && password.length > 0 && !passwordIsValid;
  const showConfirmError =
    confirmTouched && confirmPassword.length > 0 && !passwordsMatch;

  async function handleSignup() {
    setNameTouched(true);
    setEmailTouched(true);
    setPasswordTouched(true);
    setConfirmTouched(true);

    if (!nameIsValid || !emailIsValid || !passwordIsValid || !passwordsMatch) return;

    setLoading(true);
    try {
      await signUp(email, password, name.trim());
      Alert.alert('Account created', 'You can now sign in.');
    } catch (e: any) {
      Alert.alert('Signup failed', e.message);
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
        <Text className="font-bold text-extralarge text-ink">Create account</Text>
        <Text className="font-regular text-medium text-ink30">
          Start tracking in minutes
        </Text>
      </View>

      <Text className="font-semibold text-small text-ink20">NAME</Text>
      <TextInput
        placeholder="Full name"
        autoCapitalize="words"
        autoCorrect={false}
        value={name}
        onChangeText={setName}
        onBlur={() => setNameTouched(true)}
        editable={!loading}
        className={`border rounded-lg p-4 font-regular text-medium text-ink ${
          showNameError ? 'border-alert' : 'border-hairline'
        }`}
      />
      {showNameError && (
        <Text className="font-semibold text-small text-alert mb-2">
          Enter your name
        </Text>
      )}

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
          onBlur={() => setPasswordTouched(true)}
          editable={!loading}
          className={`border rounded-lg p-4 pr-12 font-regular text-medium text-ink ${
            showPasswordError ? 'border-alert' : 'border-hairline'
          }`}
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
      {showPasswordError && (
        <Text className="font-semibold text-small text-alert mb-2">
          Password must be at least {MIN_PASSWORD_LENGTH} characters
        </Text>
      )}

      <Text className="font-semibold text-small text-ink20">CONFIRM PASSWORD</Text>
      <View className="relative justify-center">
        <TextInput
          placeholder="Confirm password"
          secureTextEntry={!showConfirmPassword}
          autoCapitalize="none"
          autoCorrect={false}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onBlur={() => setConfirmTouched(true)}
          editable={!loading}
          className={`border-1 rounded-lg p-4 pr-12 font-regular text-medium text-ink ${
            showConfirmError ? 'border-alert' : 'border-hairline'
          }`}
        />
        <Pressable
          onPress={() => setShowConfirmPassword((v) => !v)}
          className="absolute right-4"
          hitSlop={10}
          accessibilityLabel={showConfirmPassword ? 'Hide password' : 'Show password'}
        >
          {showConfirmPassword ? (
            <EyeOff size={20} color="#A1A1AA" strokeWidth={1.75} />
          ) : (
            <Eye size={20} color="#A1A1AA" strokeWidth={1.75} />
          )}
        </Pressable>
      </View>
      {showConfirmError && (
        <Text className="font-semibold text-small text-alert mb-2">
          Passwords don't match
        </Text>
      )}

      <Pressable
        onPress={handleSignup}
        disabled={loading}
        className="bg-ink  rounded-lg p-4 items-center mt-5"
        style={{ opacity: loading ? 0.6 : 1 }}
      >
        <Text className="font-medium text-pureWhite">
          {loading ? 'Creating…' : 'Create account'}
        </Text>
      </Pressable>

      <Link href="/(auth)/login" className="mt-4">
        <Text className="font-regular text-medium text-ink30 text-center">
          Already have an account?{' '}
        </Text>
        <Text className="font-medium text-medium text-ink">Sign in</Text>
      </Link>
    </View>
  );
}
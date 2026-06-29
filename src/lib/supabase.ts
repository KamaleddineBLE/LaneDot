import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const url = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(url, anonKey, {
  auth: {
    storage: AsyncStorage,        //to keep session in async storage for react native
    autoRefreshToken: true,       // refresh the token automatically
    persistSession: true,         // stay logged in across restarts
    detectSessionInUrl: false,    // that's a web-only concern; off for RN
  },
});
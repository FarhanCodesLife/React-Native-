import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setAuthenticated, setUser } from './config/redux/slices/authSlice';
import { AppDispatch } from './config/redux/store/Store';
import { User } from './config/redux/types/types';

interface LoginCredentials {
  email: string;
  password: string;
}

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateInput = ({ email, password }: LoginCredentials): boolean => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }
    if (!email.includes('@')) {
      Alert.alert('Error', 'Please enter a valid email');
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    try {
      if (!validateInput({ email, password })) return;

      setLoading(true);
      
      // Your login API call here
      // const response = await loginUser({ email, password });
      
      // For demo, simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = { 
        id: 1, 
        email 
      };
      
      dispatch(setUser(mockUser));
      dispatch(setAuthenticated(true));
      
      router.replace("/(tabs)");
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        editable={!loading}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        editable={!loading}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 12,
    padding: 10,
    borderRadius: 4,
  },
});
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./config/redux/store/Store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "./config/redux/store/Store";

function RootLayoutNav() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // Add error boundary
  useEffect(() => {
    const handleError = (error: Error) => {
      console.error('Navigation Error:', error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="index" 
      />
      <Stack.Screen 
        name="login" 
        options={{ 
          redirect: isAuthenticated ? "(tabs)" : undefined,
        }} 
      />
      <Stack.Screen 
        name="signup" 
        options={{ 
          redirect: isAuthenticated ? "(tabs)" : undefined,
        }} 
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ 
          redirect: !isAuthenticated ? "login" : undefined,
        }} 
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootLayoutNav />
    </Provider>
  );
}

// Add this new file for type definitions
export interface User {
  id: number;
  email: string;
  // Add other user properties as needed
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface RootState {
  auth: AuthState;
} 
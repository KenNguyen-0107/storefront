import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  name?: string;
  token?: string;
  // Add other user properties as needed
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name?: string) => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          // Call your authentication API here
          // const response = await api.login(email, password);
          // const user = response.data;
          const user = { id: "1", email }; // Mock data, replace with actual API call

          set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({
            error: error instanceof Error ? error.message : "Login failed",
            isLoading: false,
          });
        }
      },

      logout: () => {
        // Call logout API if needed
        set({ user: null, isAuthenticated: false });
      },

      register: async (email, password, name) => {
        set({ isLoading: true, error: null });
        try {
          // Call your registration API here
          // const response = await api.register(email, password, name);
          // const user = response.data;
          const user = { id: "1", email, name }; // Mock data, replace with actual API call

          set({ user, isAuthenticated: true, isLoading: false });
        } catch (error) {
          set({
            error:
              error instanceof Error ? error.message : "Registration failed",
            isLoading: false,
          });
        }
      },

      updateUser: (userData) => {
        const currentUser = get().user;
        if (currentUser) {
          set({ user: { ...currentUser, ...userData } });
        }
      },
    }),
    {
      name: "auth-storage", // name of the item in localStorage
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    },
  ),
);

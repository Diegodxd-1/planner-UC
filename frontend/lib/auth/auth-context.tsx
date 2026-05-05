'use client';

import React, { createContext, useEffect, useState } from 'react';
import { AuthContextType, UserWithRole } from '@/types/auth';
import {
  loginWithEmail,
  logout as logoutService,
  signupWithEmail,
  getCurrentUser,
  getUserProfile,
  onAuthStateChanged,
} from './auth';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserWithRole | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Configurar listener de cambios de autenticación
  useEffect(() => {
    // Obtener usuario actual
    const getInitialUser = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        const profile = await getUserProfile(currentUser.id);
        setUser(profile);
      }
      setIsLoading(false);
    };

    getInitialUser();

    // Escuchar cambios de autenticación
    const subscription = onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const profile = await getUserProfile(authUser.id);
        setUser(profile);
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await loginWithEmail(email, password);
      const profile = await getUserProfile(response.user.id);
      setUser(profile);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await logoutService();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (
    email: string,
    password: string,
    fullName: string
  ) => {
    setIsLoading(true);
    try {
      const response = await signupWithEmail(email, password, fullName);
      if (response.user) {
        const profile = await getUserProfile(response.user.id);
        setUser(profile);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: user !== null,
    login,
    logout,
    signup,
    userRole: user?.role?.name ?? null,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de AuthProvider');
  }
  return context;
}

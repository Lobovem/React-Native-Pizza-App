import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import Login from './Login';
import SignOut from './SignOut';
import UseUserExample from './UseUserExample';

const SignInScreen: React.FC = () => {
  const tokenCache = {
    async getToken(key: string) {
      try {
        console.log(SecureStore.getItemAsync(key));

        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },

    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  return (
    <ClerkProvider
      publishableKey="pk_test_aG9wZWZ1bC1tb2xsdXNrLTI1LmNsZXJrLmFjY291bnRzLmRldiQ"
      tokenCache={tokenCache}
    >
      <SignedIn>
        <Text>You are Signed in</Text>
        <SignOut />
        <UseUserExample />
      </SignedIn>

      <SignedOut>
        <Login />
      </SignedOut>
    </ClerkProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default SignInScreen;

import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useAuth, useUser } from '@clerk/clerk-expo';

const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }

  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default SignOut;

const styles = StyleSheet.create({});

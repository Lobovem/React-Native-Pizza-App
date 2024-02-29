import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';

const UseUserExample = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return <Text>Hello, {user.firstName} welcome to pizzaApp</Text>;
};

export default UseUserExample;

const styles = StyleSheet.create({});

import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const SignInScreen: React.FC = () => {
  // GoogleSignin.configure({
  //   webClientId:
  //     '1088193933675-in155hcrk21chq6omc7thq55hdqcd5k7.apps.googleusercontent.com',
  // }); // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.

  const [userInfo, setUserInfo] = useState(null);

  // const signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     setUserInfo({ userInfo });
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in with Google</Text>
      {/* <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signIn} */}
      {/* /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  googleButton: {
    width: 192,
    height: 48,
  },
});

export default SignInScreen;

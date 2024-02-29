import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import ColorsVariable from '../../utils/ColorsVariable';
import { useOAuth } from '@clerk/clerk-expo';
import * as WebBrowser from 'expo-web-browser';
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <View style={styles.wrapComponent}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnTitle}>Let's Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapComponent: {},

  btn: {
    width: '100%',
    height: 40,
    backgroundColor: ColorsVariable.orange,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnTitle: {
    color: ColorsVariable.white,
    fontSize: 20,
    fontWeight: '500',
  },
});

import React from 'react';
import { HomeTabs } from './HomeTabs';
import { NavigationContainer } from '@react-navigation/native';
import { useAppState } from '../hooks/useAppState';
import { Image, StyleSheet, View } from 'react-native';
import hiddenBackground from '../screens/home/img/hidden-background.jpeg';

export const Navigation = () => {
  const app = useAppState();
  console.log(app);
  return (
    <NavigationContainer>
      {/* <View style={{ position: 'relative' }}>
        {app === 'inactive' && (
          <Image source={hiddenBackground} style={styles.wrap}></Image>
        )}
      </View> */}
      <HomeTabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  wrap: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'red',
    // position: 'relative',
    // width: 500,
    // height: 1000,
  },
});

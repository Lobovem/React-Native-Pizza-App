import React, { FC } from 'react';
import TabNavigation from './TabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

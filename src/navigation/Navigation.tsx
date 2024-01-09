import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MyTabs } from './MyTabs';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

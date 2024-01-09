import { NavigationContainer } from '@react-navigation/native';
import React, { FC } from 'react';
import { MyTabs } from './MyTabs';

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

import React, { FC } from 'react';
import { HomeTabs } from './HomeTabs';
import { NavigationContainer } from '@react-navigation/native';

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
};

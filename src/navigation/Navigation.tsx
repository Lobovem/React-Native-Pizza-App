import React, { FC } from 'react';
import HomeTabs from './HomeTabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'mobx-react';

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      {/* <Provider orderStore={orderStore}> */}
      <HomeTabs />
      {/* </Provider> */}
    </NavigationContainer>
  );
};

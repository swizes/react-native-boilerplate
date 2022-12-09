import {NavigationContainer} from '@react-navigation/native';
import React, {FC, PropsWithChildren} from 'react';

export const AppNavigationContainer: FC<PropsWithChildren> = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

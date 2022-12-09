import React, {FC, PropsWithChildren} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const SafeAreaContainer: FC<PropsWithChildren> = ({children}) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

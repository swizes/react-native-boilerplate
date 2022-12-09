import {
  AppNavigationContainer,
  GestureHandlerContainer,
  SafeAreaContainer,
} from '@boilerplate/containers';
import React from 'react';

const App = () => {
  return (
    <GestureHandlerContainer>
      <SafeAreaContainer>
        <AppNavigationContainer> </AppNavigationContainer>
      </SafeAreaContainer>
    </GestureHandlerContainer>
  );
};

export default App;

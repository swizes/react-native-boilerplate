import {
  AppNavigationContainer,
  SafeAreaContainer,
} from '@boilerplate/containers';
import {GestureHandlerContainer} from '@boilerplate/containers/GestureHandlerContainer';
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

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './Stacks/MainStack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <MainStack />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default App;

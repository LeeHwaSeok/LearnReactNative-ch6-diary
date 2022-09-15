import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';
import {SeacrhContextProvider} from './contexts/SearchContext';

function App() {
  return (
    <NavigationContainer>
      <SeacrhContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SeacrhContextProvider>
    </NavigationContainer>
  );
}

export default App;

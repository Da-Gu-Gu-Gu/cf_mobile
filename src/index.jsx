import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoginNavigation} from './navigation';
import {ScreensNavigation} from './navigation';
import {StatusBar} from 'react-native';
import {theme} from './utils/theme';

const App = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isAuth, setIsAuth] = useState(false);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.primary} />
      {isAuth ? <ScreensNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
};

export default App;

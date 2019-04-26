import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthTabNavigator from './AuthTabNavigator';

const InitialNavigator = createSwitchNavigator({
    Splash: SplashScreen,
    App: AuthTabNavigator
  });
  
  export default createAppContainer(InitialNavigator);
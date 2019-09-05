import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// eslint-disable-next-line import/no-unresolved
import { useScreens } from 'react-native-screens';
import WelcomeScreen from '../screens/WelcomeScreen';
import DrawerNav from './DrawerNav';

useScreens();
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: DrawerNav,
});

export const AppContainer = createAppContainer(AppSwitchNavigator);

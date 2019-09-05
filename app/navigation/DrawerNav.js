import React from 'react';
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems,
  SafeAreaView,
} from 'react-navigation';
import { DashboardStackNavigator } from './StackNav';
import tabBarIcon from './tabBarIcon';
import DrawerHeader from '../components/DrawerHeader';

const WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerHeader />
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const DrawerConfig = {
  drawerWidth: WIDTH * 0.77,
  drawerBackgroundColor: '#FFF',
  hideStatusBar: false,
  contentComponent: CustomDrawerContentComponent,
  contentOptions: {
    inactiveTintColor: '#606060',
    inactiveBackgroundColor: '#FFFFFF',
    activeTintColor: '#00A4EF',
    labelStyle: {
      width: WIDTH * 0.77 - 75,
    },
  },
  navigationOptions: {
    drawerIcon: tabBarIcon('add'),
  },
};

const DrawerNavigator = createDrawerNavigator(
  {
    DashboardStackNavigator: {
      screen: DashboardStackNavigator,
      navigationOptions: ({ navigation }) => ({
        drawerLabel: 'my tab 1',
        drawerIcon: tabBarIcon('storage'),
      }),
    },
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'purple',
    padding: 0,
    margin: 0,
  },
});

import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { StackNavTab1 } from './StackNavTab1';
import { StackNavTab2 } from './StackNavTab2';
import { StackNavTab3 } from './StackNavTab3';
import tabBarIcon from './tabBarIcon';
import Colors from '../components/styled/Color';

export const DashboardTabNavigator = createMaterialBottomTabNavigator(
  {
    Tab1: {
      screen: StackNavTab1,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 12 }}>tab 1</Text>,
        tabBarIcon: tabBarIcon('email'),
      },
    },
    Tab2: {
      screen: StackNavTab2,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 12 }}>tab 2</Text>,
        tabBarIcon: tabBarIcon('storage'),
      },
    },
    Tab3: {
      screen: StackNavTab3,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontSize: 12 }}>tab 3</Text>,
        tabBarIcon: tabBarIcon('format-list-bulleted'),
      },
    },
  },
  {
    shifting: true,
    labeled: true,
    labelStyle: { fontSize: 28 },
    activeTintColor: Colors.HEX.white,
    barStyle: {
      backgroundColor: Colors.HEX.botTabNavBkg,
    },
    inactiveTintColor: Colors.HEX.botTabNavBkg2,
    initialRouteName: 'Tab1',
    navigationOptions: () => ({
      header: null,
    }),
    // navigationOptions: ({ navigation }) => {
    //   const { routeName } = navigation.state.routes[navigation.state.index];
    //   return {
    //     header: null,
    //     headerTitle: routeName,
    //   };
    // },
  }
);

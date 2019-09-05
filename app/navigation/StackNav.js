// import React from 'react';
import { createStackNavigator } from 'react-navigation';
// import { MaterialIcons } from '@expo/vector-icons';
import { DashboardTabNavigator } from './DashBottomNav';

export const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator,
  }
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     headerLeft: (
  //       <MaterialIcons
  //         name="dehaze"
  //         size={30}
  //         color="black"
  //         style={{ paddingLeft: 10 }}
  //         onPress={() => navigation.openDrawer()}
  //       />
  //     ),
  //   }),
  // }
);

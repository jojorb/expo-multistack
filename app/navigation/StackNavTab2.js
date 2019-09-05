import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import Tab2 from '../screens/Tab2';
import Colors from '../components/styled/Color';

const WIDTH = Dimensions.get('window').width;

export const StackNavTab2 = createStackNavigator(
  {
    Tab2: {
      screen: Tab2,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Tab 2',
        headerLeft: (
          <MaterialIcons
            name="dehaze"
            size={30}
            color={Colors.HEX.white}
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }),
    },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      headerTitle: `${navigation.state.routeName} page`,
      headerMode: 'float',
      headerStyle: {
        backgroundColor: Colors.HEX.stackNavBkg,
        shadowColor: 'trasparent',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      },
      headerTintColor: Colors.HEX.white,
      headerTitleStyle: {
        fontWeight: 'bold',
        width: WIDTH - 75,
      },
    }),
  }
);

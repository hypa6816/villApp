import React from 'react';
import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabBarIcon from '../components/TabBarIcon';
import { colors, fonts } from '../theme';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

export default createAppContainer(createBottomTabNavigator(
  {
    SignIn: SignIn,
    SignUp: SignUp,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'SignIn') {
          iconName = Platform.OS === 'ios' ? 'ios-log-in' : `md-log-in`;
        } else if (routeName === 'SignUp') {
          iconName = Platform.OS === 'ios' ? 'ios-person-add' : `md-person-add`;
        }

        return <IconComponent name={iconName} size={26} color={tintColor} />;
      },
    }),
    tabBarOptions: {
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.secondary,
        indicatorStyle: { backgroundColor: colors.secondary },
        labelStyle: {
          fontFamily: fonts.base,
          fontSize: 12
        },
    style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        paddingBottom: 3
      },
    }
  }
));





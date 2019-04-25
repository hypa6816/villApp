import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import ForumScreen from '../screens/ForumScreen';
import CompanyScreen from '../screens/CompanyScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};

const ForumStack = createStackNavigator({
  Forum: ForumScreen,
});

ForumStack.navigationOptions = {
  tabBarLabel: 'Forum',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-quote' : 'md-quote'}
    />
  ),
};

const CompanyStack = createStackNavigator({
  Company: CompanyScreen,
});

CompanyStack.navigationOptions = {
  tabBarLabel: 'Companies',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-business' : 'md-business'}
    />
  ),
};

export default createBottomTabNavigator({
  ForumStack,
  CompanyStack,
  HomeStack,
});

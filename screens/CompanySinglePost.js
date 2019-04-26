// @flow
import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';

import {

  BackButton,

} from 'react-native-activity-feed';

import Product from './Product1/Product';

const Colors = {
    red: '#FF3B30',
    orange: '#FF9500',
    yellow: '#FFCC00',
    green: '#4CD964',
    tealBlue: '#5AC8FA',
    blue: '#007AFF',
    purple: '#5856D6',
    pink: '#FF2D55',
  
    white: '#FFFFFF',
    customGray: '#EFEFF4',
    lightGray: '#E5E5EA',
    lightGray2: '#D1D1D6',
    midGray: '#C7C7CC',
    gray: '#8E8E93',
    black: '#000000',
  }


export default class CompanySinglePost extends React.Component {

    
  static navigationOptions = ({ navigation }: Props) => ({
    title: 'BACK',
    headerLeft: (
      <View style={{ paddingLeft: 15 }}>
        <BackButton pressed={() => navigation.goBack()} blue />
      </View>
    ),
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 13,
    },
  });

  
  
  render() {

    
    const { navigation } = this.props;
    const info = navigation.state.params.activity;
    console.log(info);
    return(
        <Product {...info}>
        </Product>
    );
  }
}
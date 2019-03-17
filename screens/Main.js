import AppNavigator from '../navigation/AppNavigator';

import React, {Component} from 'react';
import { StyleSheet, Platform, Image, Text, View } from 'react-native';
import firebase from 'react-native-firebase';

export default class Main extends Component {
  
render() {
    
return (
      <View style={styles.container}>
        <AppNavigator/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  }
})
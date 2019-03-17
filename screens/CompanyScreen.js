import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  SectionList,
  Button,
  Text,
  TouchableHighlight,
} from 'react-native';

// import CompanyPage from './CompanyPage';
import CompanyNavigator from '../navigation/CompanyNavigator';

import { createStackNavigator } from 'react-navigation';
import CompanyList from '../components/CompanyList';


const data = [
  {key: 'New', 
    data: [
    {name: 'Foo1'}, 
    {name: 'Foo2'}
    ]}, 
  
  {key: 'Old', 
    data: [
      {name:'Foo3'},
      {name: 'Foo4'}]
    }];


export default class CompanyScreen extends React.Component {


  _redirectPage () { 
    console.log("hello");
    this.props.navigation.navigate('Company_Page');
  }

  static navigationOptions = {
    title: "CompanyScreen",
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <CompanyNavigator>
      </CompanyNavigator>
    );
  }
}


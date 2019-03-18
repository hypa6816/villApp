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

export default class CompanyScreen extends React.Component {

  static navigationOptions = {
    header: null, 
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <CompanyNavigator>
      </CompanyNavigator>
    );
  }
}


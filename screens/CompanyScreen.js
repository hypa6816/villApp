import React from 'react';
import CompanyNavigator from '../navigation/CompanyNavigator';


export default class ForumScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <CompanyNavigator>
        </CompanyNavigator>
    );
  }
}
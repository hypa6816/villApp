import React from 'react';
import ForumNavigator from '../navigation/ForumNavigator';


export default class ForumScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
        <ForumNavigator>
        </ForumNavigator>
    );
  }
}
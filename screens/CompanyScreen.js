import React from 'react';
import CompanyNavigator from '../navigation/CompanyNavigator';
import { View, StyleSheet, Text } from 'react-native';

import {STREAM_API_KEY, STREAM_API_URL, STREAM_APP_ID} from 'react-native-dotenv';

import {

  StreamApp,

} from 'react-native-activity-feed';



export default class ForumScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userToken: null,
   }
  }

  static navigationOptions = {
    header: null,
  };
  async getUserToken(userID) {
    let url = STREAM_API_URL + "/getUserStreamToken?userId=" + userID; 
    try {
      const response = await fetch(url)
      return (await response.json()).userToken
    } catch (err) {
      console.log(err)
    }
  }
  async componentDidMount() {
    try {
      const userToken = await this.getUserToken("admin_companies");
      this.setState({ userToken });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const api = STREAM_API_KEY;
    const id =  STREAM_APP_ID;
    if (this.state.userToken) {
      const token = this.state.userToken.toString()

    return (
      <StreamApp
        apiKey={api}
        appId={id} 
        token={token}
      >
        <CompanyNavigator>
        </CompanyNavigator>
      </StreamApp>
      
    );
    } else {
      return(
        <Text>
          Loading..
        </Text>
      )
    }
  }
}
import React from 'react';


import SafeAreaView from 'react-native-safe-area-view';

import {
  Text
} from 'react-native';

import { 
  FlatFeed,
  StreamApp,
} from 'react-native-activity-feed';

import {STREAM_API_KEY, STREAM_API_URL, STREAM_APP_ID} from 'react-native-dotenv';



export default class CompanyPage extends React.Component {
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
      const userToken = await this.getUserToken("test");
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
        return(
        // render child component that depends on async data
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
          <StreamApp
            apiKey={api}
            appId={id} 
            token={token}
          >
            <FlatFeed feedGroup="food"
            
            />
          </StreamApp>
        </SafeAreaView>
        );
        
      } else {
        return(
          <Text> Loading... </Text>
        );
      }
  }
}

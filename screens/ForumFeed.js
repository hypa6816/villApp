import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, FlatFeed } from 'react-native-activity-feed';
import {STREAM_API_KEY, STREAM_API_URL, STREAM_APP_ID} from 'react-native-dotenv';

export default class ForumFeed extends React.Component {

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
      const userToken = await this.getUserToken();
      this.setState({ userToken });
    } catch (err) {
      // handle errors
    }
  }

  render() {
    const api = STREAM_API_KEY;
    const id =  STREAM_APP_ID;
    
    if (this.state.userToken) {
      // render child component that depends on async data
      const token = this.state.userToken.toString()

        return (
          // <ScrollView style={styles.container}>
          //   <Text>Welcome to FORUM FEED!</Text>
          // </ScrollView>
    
          <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
          <StreamApp
              apiKey={api}
              appId={id}
              token={token}
          >
            <FlatFeed />
          </StreamApp>
        </SafeAreaView>
        );
      
    } else {
      return(
        <View>
          <Text>Loading...</Text>
        </View>
      );
      // initial render
    } 
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

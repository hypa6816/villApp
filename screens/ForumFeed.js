import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, FlatFeed } from 'react-native-activity-feed';
import {STREAM_API_KEY, STREAM_API_TOKEN, STREAM_APP_ID} from 'react-native-dotenv';
export default class ForumFeed extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const api = STREAM_API_KEY;
    const token = STREAM_API_TOKEN;
    const id =  STREAM_APP_ID;
    
    
    return (
      // <ScrollView style={styles.container}>
      //   <Text>Welcome to FORUM FEED!</Text>
      // </ScrollView>


//       STREAM_API_KEY=kzjsxxee75ds
// STREAM_API_TOKEN=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6ImFuYWx5dGljcyIsImFjdGlvbiI6IioiLCJ1c2VyX2lkIjoiKiJ9.qBhAUFdCUGg3JyAXd_u6zQRlvbgx4JHaKIt1NTE8XrA
// STREAM_APP_ID=49446
      <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
      <StreamApp
          apiKey="kzjsxxee75ds"
          token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6ImFuYWx5dGljcyIsImFjdGlvbiI6IioiLCJ1c2VyX2lkIjoiKiJ9.qBhAUFdCUGg3JyAXd_u6zQRlvbgx4JHaKIt1NTE8XrA"
          appId="49446"
      >
        <FlatFeed />
      </StreamApp>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

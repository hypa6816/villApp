import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, FlatFeed } from 'react-native-activity-feed';

export default class ForumFeed extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    
    return (
      // <ScrollView style={styles.container}>
      //   <Text>Welcome to FORUM FEED!</Text>
      // </ScrollView>

      <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
      <StreamApp
          apiKey="3qxmdwn7rdkv"
          appId="49448"
          token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.OmgD-64bDogYOYUTxcJgXzzQdEyR8kG0Q3WlFKaWxUs"
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

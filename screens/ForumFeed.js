import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text
} from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, 
  FlatFeed, 
  StatusUpdateForm, 
  Activity,  
  LikeButton } from 'react-native-activity-feed';
import {STREAM_API_KEY, STREAM_API_URL, STREAM_APP_ID} from 'react-native-dotenv';

import { 
  CommentBox, 
  CommentItem, 
  CommentField,
  CommentsContainer } from 'react-native-activity-feed-core';

import PostIcon from '../images/icons/post.png';

var Spinner = require('react-native-spinkit');

const CustomActivity = (props) => {
  return (
    <Activity
      {...props}
      Footer={
        <View>
            <LikeButton {...props} />
            <CommentBox {...props} />

            {/* <CommentField {...props} /> */}
            {/* <CommentItem {...props}/> */}
            
        </View>
      }
    />
  );
};

export default class ForumFeed extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userToken: null,
   }
  }




  static navigationOptions = ({ navigation }: Props) => ({
    title: 'BOULDER ENGINEERS',
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 13,
      marginLeft: 19,
    },
    headerLeft: (
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        style={{ paddingLeft: 15 }}
      >
        <Image
          source={
            require("../images/bc_logo.png")
          }
          style={{ width: 23, height: 23 }}
          noShadow
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate('NewPost')}
        style={{ paddingRight: 15 }}
      >
        <Image source={PostIcon} style={{ width: 23, height: 23 }} />
      </TouchableOpacity>
    ),
  });


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
      const userToken = await this.getUserToken("demo");
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
          <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
          <StreamApp
              apiKey={api}
              appId={id}
              token={token}
          >
            <FlatFeed
            Activity={CustomActivity} notify 
            userId="demo"/>
            <StatusUpdateForm feedGroup="timeline" />
          </StreamApp>
        </SafeAreaView>
        );
      
    } else {

      return(
        
        <View style={styles.container}>
          <Text> LOADING ... </Text>
        </View>
      );
      // initial render
    } 
  } 
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  spinner: {
    marginBottom: 50
  },
});

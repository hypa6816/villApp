import React from 'react';

import SafeAreaView from 'react-native-safe-area-view';

import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { 
  Avatar,
  FlatFeed,
  StreamApp,
  Activity,
  LikeButton,
  ReactionIcon
} from 'react-native-activity-feed';

import ReplyIcon from '../images/icons/reply.png';
import PostIcon from '../images/icons/post.png';



import {STREAM_API_KEY, STREAM_API_URL, STREAM_APP_ID} from 'react-native-dotenv';



export default class CompanyPage extends React.Component {
  

  static navigationOptions = ({ navigation }: Props) => ({
    title: 'COMPANIES',
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
            require("../images/ville_icon.png")
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

  _onPressActivity = (ActivityData) => {
    this.props.navigation.navigate('Company_Single_Post', {
      activity: ActivityData,
    });
  };

  render() {
        return(
        // render child component that depends on async data
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
            <FlatFeed 
              feedGroup="company"              
              userId = "admin_companies"
              notify
              navigation={this.props.navigation}
              Activity={(props) => (
                <TouchableOpacity
                  onPress={() => this._onPressActivity(props.activity)}
                >
                  <Activity
                    {...props}
                    Footer={
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <LikeButton {...props} />

                        <ReactionIcon
                          icon={ReplyIcon}
                          labelSingle="comment"
                          labelPlural="comments"
                          counts={props.activity.reaction_counts}
                          kind="comment"
                        />
                      </View>
                    }
                  />
                </TouchableOpacity>
              )}
            />
        </SafeAreaView>
        
        );
  }
}

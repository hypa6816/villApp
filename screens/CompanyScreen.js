import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import SafeAreaView from 'react-native-safe-area-view';
import { StreamApp, 
  FlatFeed, 
  Activity,  
  UserBar,
  Header } from 'react-native-activity-feed';
import {STREAM_API_KEY, STREAM_API_URL, STREAM_APP_ID} from 'react-native-dotenv';

// const activity = {
//   actor: 
//   {
//     data: {
//       name: 'Nora Ferguson',
//       profileImage: 'https://randomuser.me/api/portraits/women/72.jpg',
//     },
//   },
//   verb: 'post',
//   object: 'Just came back from this hike! #Hiking #Madeira',
//   image:
//     'https://handluggageonly.co.uk/wp-content/uploads/2017/08/IMG_0777.jpg',
//   time: new Date(),
// };

// const Footer = () => <ActivityFooter userId="123" activity={activity} />;

const CustomActivity = (props) => {
  // var icon = this.props.active ? props.activity.logo.toString() : "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjihun1qN_hAhWHA3wKHfufCIUQjRx6BAgBEAU&url=https%3A%2F%2Fwww.onlinewebfonts.com%2Ficon%2F358304&psig=AOvVaw3nMp7MFuoL1Re6Kac4RP-0&ust=1555871971860062";  
  return (
    <Activity
      {...props}
      Header={
        <View>
          {/* <Image
          source={
            require({icon}
              )
          }/> */}
          <Text> {props.activity.name} </Text>
        </View>

      }
      Content={
        <View>
          <Text> {props.activity.description} </Text>
          <Text> {props.activity.website} </Text>
        </View>
      }
      Footer={
        <View>
          <Text> {props.activity.location} </Text>
          <Text> {props.activity.total_employees} </Text>
          <Text> {props.activity.year_founded} </Text>
          <Text> {props.activity.industry} </Text>
        </View>
      }
    />
  );
};
 
//user_name = "test";
export default class CompanyScreen extends React.Component {
  

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
              feedGroup="company"
              userId = {"admin_companies"}
              Activity={CustomActivity}
              notify
            />
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
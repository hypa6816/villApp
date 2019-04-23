// @flow
import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet, Text } from 'react-native';

import {

  BackButton,

} from 'react-native-activity-feed';



export default class CompanySinglePost extends React.Component {

    
  static navigationOptions = ({ navigation }: Props) => ({
    title: 'BACK',
    headerLeft: (
      <View style={{ paddingLeft: 15 }}>
        <BackButton pressed={() => navigation.goBack()} blue />
      </View>
    ),
    headerTitleStyle: {
      fontWeight: '500',
      fontSize: 13,
    },
  });

  

  render() {
    const { navigation } = this.props;
    // const activity = navigation.getParam('activity');
    // const feedGroup = navigation.getParam('feedGroup');
    // const userId = navigation.getParam('userId');
    const info = navigation.state.params.activity;

    const desc = info.object;
    const website = info.website;
    const name = info.name;
    const employeeCount = info.local_employees;
    const image = info.profileImage.toString();
    const loc = info.location;
    const type = info.industry;



    return(
        <View style={styles.container}>
          <View style={styles.header}></View>
          {/* <Image style={styles.avatar} source={{uri:{image}}}/> */}
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.info}>{loc}</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>{employeeCount}</Text> 
              </TouchableOpacity>
              <Text style={styles.description}>
              {website}
              </Text>
              <Text style={styles.description}>
              {desc}
              </Text>
              {/* <Image style={styles.icon} source={{uri: image}}></Image>*/}
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>{employeeCount}</Text> 
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>{type}</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#00BFFF",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    icon:{
      height: 25,
      width: 25
    }
  });
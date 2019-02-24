
import React from 'react';
import { Platform, StatusBar, Text, StyleSheet, View, Image } from 'react-native';

import { Card, ListItem, Button, Icon } from 'react-native-elements';


const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },

]

const posts =[{
  key: 1,
  name: 'Sam',
  description: 'A man that carries Frodo in Lord of the Rings',
  image: 'https://facebook.github.io/react/logo-og.png'
},
{
  key: 2,
  name: 'Ian',
  description: 'A 21 year old male looking for love',
  image: 'https://facebook.github.io/react/logo-og.png'
},
{
  key: 3,
  name: 'Heesu',
  description: 'A 22 year old computer science student looking for a job',
  image: 'https://facebook.github.io/react/logo-og.png'
}]
export default class Post1 extends React.Component {

  render() {
    
    return(
      // implemented without image with header
      // implemented with Text and Button as children
      <View>
        {posts.map((post, i)=>{
          console.log(post)

          return(
            <Card
            title={post.name} 
            >
             <Image source={{uri: post.image}} style={{width: 100, height: 100}} />
            <Text style={{marginBottom: 10}}>
              {post.description}
            </Text>
          </Card>
          );

        })}
        
      </View>
    )
  }


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});






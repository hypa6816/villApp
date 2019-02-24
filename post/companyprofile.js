import React from 'react';
import { Platform, StatusBar, Text, StyleSheet, View, Image } from 'react-native';

// export default class CompanyProfile extends React.Component {
//   render() {
//   	return(
//       <View>
// 		<Image
//           source={require('puppies.jpg')}
//         />
//       </View>
//     )
//   }


// }


export default class CompanyProfile extends React.Component {
  render() {
    return(
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <Image 
          style={{width: 70, height: 70, alignItems: 'flex-start'}}
          source={require('../puppies.jpg')}
        />
      </View>
    )
  }


}



import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CompanyPage extends React.Component {


  static navigationOptions = {
    title: "CompanyPage",
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>
        We have no friends!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
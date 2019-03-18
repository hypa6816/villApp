import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CompanyPage extends React.Component {


  static navigationOptions = {
    title: "CompanyPage",
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('companyId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');
    return (
      <View style={styles.container}>
        <Text>
        {itemId}
        {otherParam}
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
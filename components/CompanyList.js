import React from 'react';
import { StyleSheet, Text, SectionList, TouchableHighlight } from 'react-native';

import CompanyNavigator from '../navigation/CompanyNavigator';
import { ScrollView } from 'react-native-gesture-handler';

import Search from '../components/Search'



export default class CompanyList extends React.Component {
  
  constructor(){
    super();
    router: CompanyNavigator
  }
  _redirectPage (name) { 
    console.log(name);
    this.props.navigation.navigate('Company_Page', {
      companyId: name,
      otherParam: 'anything you want here',
    }); 
  }

  static navigationOptions = {
    title: "Companies",
  };

  render() {
    return (
      <ScrollView styles={styles.container}>
        <Search/>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) =>       
            <TouchableHighlight onPress={this._redirectPage.bind(this, item)}>
              <Text style={styles.item}>
                {item}
              </Text>
            </TouchableHighlight>
          }
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </ScrollView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  sectionHeader2: {
    height: 50,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 10
  },
  header: {
      fontSize: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
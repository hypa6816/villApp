import React from 'react';
import { StyleSheet, Text, SectionList, TouchableHighlight } from 'react-native';

import CompanyNavigator from '../navigation/CompanyNavigator';
import { ScrollView } from 'react-native-gesture-handler';

import Search from '../components/Search'

import mockData from '../_mockData/googleplace.json'

import {connect} from 'react-redux';

import {FBfetchCompanies} from '../actions';



class CompanyList extends React.Component {
  
  constructor(){
    super();
    router: CompanyNavigator
  }
  _redirectPage (company) { 
    console.log(name);
    console.log(this.props.company);
    
    this.props.navigation.navigate('Company_Page', company); 
  }

  selectionList = () => {
    return(mockData.results)
  }

  static navigationOptions = {
    title: "Companies",
  };

  render() {
    this.props.getCompanies;

    const { company, companyFetching } = this.props.company;
    return (
      <ScrollView styles={styles.container}>
        <Search/>
        <SectionList
        // sections = {this.selectionList}
          sections={[
            {title: 'Boulder', data: mockData.results
            },
          ]}
          renderItem={({item}) =>       
            <TouchableHighlight onPress={this._redirectPage.bind(this, item)}>
              <Text style={styles.item}>
                {item.name}
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


function mapStateToProps(state){
  return {
    company: state.company
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getCompanies: () => dispatch(FBfetchCompanies()),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(CompanyList)

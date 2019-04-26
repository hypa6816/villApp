import React, { Component } from 'react'
import {
  ImageBackground,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'

import PhotoButton from './PhotoButton'
import ProductStyles from './ProductStyle'

const styles = StyleSheet.create({ ...ProductStyles })



    // const desc = info.object;
    // const website = info.website;
    // const name = info.name;
    // const employeeCount = info.local_employees;
    // const image = info.profileImage.toString();
    // const loc = info.location;
    // const type = info.industry;

class Product extends Component {
  static propTypes = {
    containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    industry: PropTypes.string,
    object: PropTypes.string.isRequired,



    total_employees: PropTypes.string,
    website: PropTypes.string,


    profileImage: PropTypes.string.isRequired,

    
  }

  static defaultProps = {
    containerStyle: {},
  }

  renderDetail = () => {
    const {
      object
    } = this.props;
    return (
      <View>
        <Text style={styles.detailText}>About Us</Text>
        <Text style={styles.subDetailText}>{object}</Text>
      </View>
    )
  }

  renderDescription = () => {
    const {
      name,
      location,
      industry,
      
    } = this.props;

    return (
      <View>
        <Text style={styles.priceText}>{name}</Text>
        <Text style={styles.descriptionText}>{location}</Text>
        <Text style={styles.descriptionText}>{industry}</Text>
      </View>
    )
  }

  renderNavigator = () => {
    const {
      total_employees,
      website
    } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity style={[styles.navigatorButton, { flex: 2 }]}>
          <Text style={styles.navigatorText}>{website}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.navigatorButton, { flex: 1 }]}>
          <Text style={styles.navigatorText}>{total_employees}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderContactHeader = () => {
    const {
      profileImage,
    } = this.props;
    return (
      <View style={styles.headerContainer}>
        <View style={styles.coverContainer}>
          <ImageBackground
            source={
              require('./companySplash.png')
            }
            style={styles.coverImage}
          >

          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{
                uri: profileImage,
              }}
            />
            <Text style={styles.userNameText}>{name}</Text>
          </View>
          </ImageBackground>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.mainviewStyle}>
        <ScrollView style={styles.scroll}>
          <View style={[styles.container, this.props.containerStyle]}>
            <View style={styles.cardContainer}>
              {this.renderContactHeader()}
            </View>
          </View>
          <View style={styles.productRow}>{this.renderDescription()}</View>
          <View style={styles.productRow}>{this.renderDetail()}</View>
          <View style={styles.productRow}>{this.renderNavigator()}</View>
        </ScrollView>
        {/* <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonFooter}>
            <Text style={styles.textFooter}>CALL</Text>
          </TouchableOpacity>
          <View style={styles.borderCenter} />
          <TouchableOpacity style={styles.buttonFooter}>
            <Text style={styles.textFooter}>EMAIL</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    )
  }
}

export default Product

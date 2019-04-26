import React, {Component} from 'react';
import AppNavigator from './navigation/AppNavigator';
import TabNavigator from './navigation/AuthTabNavigator';

import { StatusBar } from 'react-native'

import { connect } from 'react-redux'
import SplashScreen from './screens/SplashScreen';
import firebase from 'react-native-firebase';

class App extends React.Component {
  
  state = {
    user: {},
    isLoading: true,
    isSplashLoading: true,
  }
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        1800
      )
    );
  }
  async componentDidMount() {
    StatusBar.setHidden(true)
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isSplashLoading: false });
    }
    try {
      const user = await firebase.auth().currentUser;
      this.setState({ user, isLoading: false })
    } catch (err) {
      this.setState({ isLoading: false })
    }
  }
  async componentWillReceiveProps(nextProps) {
    try {
      const user = await firebase.auth().currentUser;
      this.setState({ user })
    } catch (err) {
      this.setState({ user: {} })
    }
  }
  render() {
    console.log(firebase.auth().currentUser) 
    if(this.state.isSplashLoading){
      return(
        <SplashScreen/>
      )
    }
    if (this.state.isLoading) return null
    let loggedIn = false
    if (this.state.user) {
      loggedIn = true
    }
    if (loggedIn) {
      return (
        <AppNavigator/>
      )
    }
    return (
      <TabNavigator />
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(App)


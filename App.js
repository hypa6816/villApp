import React, {Component} from 'react';
import AppNavigator from './navigation/AppNavigator';
import TabNavigator from './navigation/AuthTabNavigator';

import { StatusBar } from 'react-native'

import { connect } from 'react-redux'


class App extends React.Component {
  state = {
    user: {},
    isLoading: true
  }
  async componentDidMount() {
    StatusBar.setHidden(true)
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
    if (this.state.isLoading) return null
    let loggedIn = false
    if (this.state.user) {
      loggedIn = true
    }
    if (this.state.user) {
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


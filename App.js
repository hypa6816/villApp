/**
 * App.js is a Switch Navigator that changes the screen of the application depending on the state
 * of Authentication of the application
 */
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import postReducer from './reducers/posts'
import AuthNavigator from './navigation/AuthNavigator'

const store = configureStore(postReducer);

export default class App extends Component{
  render(){
    return(
      <Provider store={ store }>
        <AuthNavigator/>
      </Provider>
    )
  }
};

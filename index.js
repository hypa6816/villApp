/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// redux
import { createStore, applyMiddleware } from 'redux'
import React, {Component} from 'react';
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
const store = createStore(rootReducer, applyMiddleware(thunk))

// App
const villeApp = () => (
    <Provider store={store}>
      <App />
    </Provider>
  )

AppRegistry.registerComponent(appName, () => villeApp);

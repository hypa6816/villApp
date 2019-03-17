import {FETCHING_POSTS, FETCHING_POSTS_SUCCESS, FETCHING_POSTS_FAILURE, FETCHING_COMPANY, CLEAR_POSTS} from '../constants/Strings';
import firebase from 'react-native-firebase';

export function fetchPostsFromAPI() {
    return (dispatch) => {
      dispatch(getPosts())
      fetch('https://jobs.github.com/positions.json?description=python&full_time=true&location=sf')
      .then(data => data.json())
      .then(json => {
        console.log('json:', json)
        dispatch(getPostsSuccess(json))
      })
      .catch(err => dispatch(getPostsFailure(err)))
    }
  }

export function getPosts() {
    return {
      type: FETCHING_POSTS
    }
  }

export function getPostsSuccess(data) {
    return {
        type: FETCHING_POSTS_SUCCESS,
        data,
    }
}

export function getPostsFailure() {
    return {
        type: FETCHING_POSTS_FAILURE
    }
}

export function clearAllPosts() {
    return {
        type: CLEAR_POSTS
    }
}

export function testCompany(){
    return (dispatch) => {
        firebase.database.ref("company");
    }
}
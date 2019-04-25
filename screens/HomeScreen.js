import React from 'react';

import PropTypes from 'prop-types'

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {connect} from 'react-redux';
import {fetchPostsFromAPI, clearAllPosts, logOut} from '../actions';
import { fonts, colors } from '../theme';
import firebase from 'react-native-firebase';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    user: ''
  }
  
  logout() {
    firebase.auth().signOut()
      .then(() => {
        this.props.dispatchLogout()
        this.props.navigation.navigate('SignIn')
      })
      .catch(err => {
        this.props.dispatchLogout()
        this.props.navigation.navigate('SignIn')
        console.warn('err: ', err)
      })
  }
  render() {
    const {posts, postsFetching} = this.props.posts
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Welcome {this.state.user}!</Text>
          <Text onPress={this.logout.bind(this)} style={styles.logout}>Logout</Text>
          <Button onPress={this.props.getPosts} title="Get Job Postings"/>
          { postsFetching && <Text>Loading...</Text>}
          {
            posts.length ? (
              <Button onPress={this.props.clearPosts} title="Clear Job Postings"/>
            ) : null
          }
          {
            posts.length ? (
              posts.map((post, i) => {
                return (
                <View key={i}>
                  <Text style= {styles.jobNumber}>Job Number: {i}</Text>
                  <Text>Title: {post.title}</Text>
                  <Text>Type: {post.type}</Text>
                  <Text>Location: {post.location}</Text>
                  <Text>Link: {post.url}</Text>
                </View>
                )
              })
            ) : null
          }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  jobNumber: {
    fontSize: 20,
    backgroundColor: 'skyblue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'skyblue',
    height: 50,
  },
  logout: {
    fontFamily: fonts.light,
    color: 'rgba(0, 0, 0, .85)',
    marginBottom: 26,
    fontSize: 22,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30,
  }
});
const contactData = {
  "name": "Joey Tribbiani",
  "username": "Leola_VonRueden",
  "address": {
    "streetA": "Abbott Shoals",
    "streetB": "505 Winona Place",
    "streetC": "4306 Hudson Street Suite 875",
    "streetD": "Suite 489",
    "city": "Ginatown",
    "state": "Massachusetts",
    "country": "Nepal",
    "zipcode": "41428-0189",
    "geo": {
      "lat": "-75.8513",
      "lng": "81.3262"
    }  
},
  
  "website": "destany.org",
  "bio":
    "Web & Mobile UI/UX designer, Motion designer following the latest ui & ux trends",
  "company": {
    "name": "Streich, Harber and Hilpert",
    "catchPhrase": "Team-oriented hybrid neural-net",
    "bs": "user-centric embrace vortals"
  },
  "avatar": "https://vignette.wikia.nocookie.net/friends/images/f/f5/JoeyTribbiani.jpg/revision/latest?cb=20180424154245",
  "avatarBackground":
    "https://orig00.deviantart.net/dcd7/f/2014/027/2/0/mountain_background_by_pukahuna-d73zlo5.png",
  "tels": [
    { "id": 1, "name": "Mobile", "number": "+66 (089)-928-2134" },
    { "id": 2, "name": "Work", "number": "+41 (112)-435-9887" }
  ],
  "emails": [
    { "id": 1, "name": "Personal", "email": "elsie-goodman@mail.com" },
    { "id": 2, "name": "Work", "email": "elsie@work.com" }
  ],
  "resume": [
    {"time": '09:00', "title": 'Event 1', "description": 'Event 1 Description'},
    {"time": '10:45', "title": 'Event 2', "description": 'Event 2 Description'},
    {"time": '12:00', "title": 'Event 3', "description": 'Event 3 Description'},
    {"time": '14:00', "title": 'Event 4', "description": 'Event 4 Description'},
    {"time": '16:30', "title": 'Event 5', "description": 'Event 5 Description'}
  ],
  "posts": [
    {
      "id": 1,
      "words": "cupiditate qui cum",
      "sentence": "Ipsum laborum quasi debitis dolores veniam.",
      "sentences":
        "Impedit veritatis harum nihil dolores dolorem optio assumenda. Laborum saepe voluptas officia odit. Ut voluptas mollitia mollitia eum autem quisquam qui aut. Et ipsa hic harum molestias et quam qui cum. Sint sit soluta.",
      "paragraph":
        "Beatae voluptas ea magni quibusdam dolorem sit aut qui. Dolorem rerum et consequuntur inventore officia excepturi dolore architecto fuga. Quia consequatur asperiores rerum qui corporis dolorum. At harum velit adipisci iste odit modi veniam ut. Deserunt quibusdam velit non ea.",
      "image":
        "https://d25tv1xepz39hi.cloudfront.net/2016-12-19/files/foodphotoghacks_image8.jpg",
      "createdDate": "2017-11-21T02:33:53.770Z",
      "user": {
        "name": "Ronaldo",
        "username": "Ronaldo.Effertz",
        "avatar":
          "https://s3.amazonaws.com/uifaces/faces/twitter/samuelkraft/128.jpg",
        "email": "Ronaldo.Effertz.Deckow@hotmail.com"
      }
    },
    {
      "id": 2,
      "words": "est voluptatum aut",
      "sentence": "Omnis omnis aut dolor quaerat sunt et optio.",
      "sentences":
        "Nam numquam magni saepe. Deserunt aspernatur dolorem libero soluta sint molestias et sint sed. Maiores id quis assumenda voluptates quos ut saepe officia voluptatem. Ea placeat sed ut. Modi sed earum voluptas cumque unde eum doloribus ipsam.",
      "paragraph":
        "Quam aut reprehenderit asperiores aut. Sunt quis aspernatur incidunt. Illo et perferendis ex incidunt eos ut maxime dolorem voluptatem. Qui rem nihil quos cumque eum doloribus. Quae beatae tempore commodi.",
      "createdDate": "2017-11-20T18:04:58.858Z",
      "user": {
        "name": "Markus",
        "username": "Markus.Price68",
        "avatar":
          "https://s3.amazonaws.com/uifaces/faces/twitter/kikillo/128.jpg",
        "email": "Markus.Price68.Dicki@yahoo.com"
      }
    },
    {
      "id": 3,
      "words": "vitae voluptas quia",
      "sentence": "Voluptates dolor ad rem amet voluptas.",
      "sentences":
        "Rem ipsum quis. Animi ipsum ut at possimus. Beatae molestiae non odio soluta quidem ut suscipit.",
      "paragraph":
        "Veniam veritatis nihil illum rerum et. Temporibus facere sed delectus corporis alias. Et odio aliquid est. Quas sit et quia tempora sit eveniet quam.",
      "createdDate": "2017-03-24T10:56:15.461Z",
      "image": "https://touristmeetstraveler.com/wp-content/uploads/sushi.jpg",
      "user": {
        "name": "Magali",
        "username": "Magali16",
        "avatar":
          "https://s3.amazonaws.com/uifaces/faces/twitter/mastermindesign/128.jpg",
        "email": "Magali1664@gmail.com"
      }
    }
  ]
}
import Profile from './Profile1/Profile'

const ProfileScreen = () => <Profile {...contactData} />

ProfileScreen.navigationOptions = () => ({
  header: null,
})

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}
function mapStateToProps(state){
  return {
    posts: state.posts,
    auth: state.auth
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getPosts: () => dispatch(fetchPostsFromAPI()),
    clearPosts: () => dispatch(clearAllPosts()),
    dispatchLogout: () => dispatch(logOut()),
  }
}

export default ProfileScreen

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {connect} from 'react-redux';
import {fetchPostsFromAPI, clearAllPosts} from '../actions';
class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  

  render() {
    const {posts, postsFetching} = this.props.posts
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>Welcome to HomeScreen!</Text>
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
    height: 80,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

});

function mapStateToProps(state){
  return {
    posts: state.posts
  }
}
function mapDispatchToProps (dispatch) {
  return {
    getPosts: () => dispatch(fetchPostsFromAPI()),
    clearPosts: () => dispatch(clearAllPosts())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(HomeScreen)

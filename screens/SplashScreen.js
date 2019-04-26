import React, { Component } from 'react';
import {StyleSheet, View, Image, Animated} from 'react-native';

class SplashScreen extends Component{
    state = {
        fadeAnim: new Animated.Value(1)
    }
    componentDidMount(){
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 0,
                duration: 2200
            }
        ).start();
    }
    render(){
        let { fadeAnim } = this.state;
        return(
            <Animated.View style = {{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#57B9D1',
                opacity: fadeAnim}}>
                <Image source={require("../images/splash.jpg")} style={styles.image}/>
            </Animated.View>

        )
    }
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#57B9D1',
      },
    image: {
        justifyContent: 'center',
        width: 497,
        height: 883
    }
 });
export default SplashScreen
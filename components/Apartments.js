import React from "react";
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';
export default class Apartments extends React.Component {
    static navigationOptions = {header: null} 

    componentDidMount() {
        Font.loadAsync({'Karla': require('../assets/fonts/Karla-Regular.ttf')});
        Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf')});
    }
    state = { fontLoaded: false};
    
  async componentDidMount() {
    await Font.loadAsync({'pt': require('../assets/fonts/pt.ttf'),});
    this.setState({fontLoaded: true});
  }

  render(){
    return(
    <ImageBackground>
       source = {require('.../assets/apartment.png')}
    <View style = {styles.parentView}>
       <Image source = {require('../assets/apartment.png')} style = {styles.logo2}/> 
        <Text style = {styles.text}>Unlike single family homes, two-flats and some three-flats, which are issued blue recycling carts by the Department of Streets and Sanitation, larger apartment buildings are required by city law to provide their own private recycling services for tenants (Cromidas). But because the law isn’t strictly enforced, some landlords fail to provide adequate recycling services and residents are forced to be proactive to find out what recycling options are available to them or forgo recycling entirely.
        </Text>
    </View>
    </ImageBackground>);
  }}

const styles = StyleSheet.create({
    logo2: {
        width: 100,
        height: 200
    },
    text: {
        width: 300,
        height: 200,
        fontFamily: 'Karla',
        fontSize: 14,
        color: '#fff',
        justifyContent: 'start',
        marginTop: 20
    }
});
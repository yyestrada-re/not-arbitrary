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
        <View style = {styles.infographics}>
            <View>
                <Image source = {require('../assets/apartment.png')} style = {styles.icon}/> 
                <Text style = {styles.text}>
                    Unlike single family homes, which are issued blue recycling carts by the Department of Streets and Sanitation, larger apartments are required by city law to provide their 
                    own private recycling services for tenants.
                </Text>
                <Text style = {{color: '#fff', fontSize: 16, marginTop: 30, marginLeft: 40, fontFamily: 'Karla'}}>
                    But because the law isn’t strictly enforced, some landlords fail to provide adequate recycling services and tenants are forced to 
                    be proactive to find out what recycling options are available to them or forgo recycling entirely.
                </Text>
                <View style = {styles.redirect}>
                    <Button
                        title= "Continue"
                        onPress={() => this.props.navigation.navigate('NavBar')}
                    />
                </View>
            </View>
        </View>
    )
}}
  

const styles = StyleSheet.create({
    icon: {
        height: '35%',
        width: '50%',
        marginLeft: 100,
        marginTop: 40
    },
    infographics: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#384D5C' //'#1B384F'
      },
    text: {
        fontFamily: 'Karla',
        fontSize: 16,
        color: '#fff',
        marginTop: 30,
        marginLeft: 40
    },
    redirect: {
        width: 90,
        height: 10,
        marginTop: 30,
        marginLeft: 250
      }
});
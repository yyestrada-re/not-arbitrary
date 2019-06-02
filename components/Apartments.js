import React from "react";
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';

export default class Apartments extends React.Component {
    static navigationOptions = {header: null} 

    componentDidMount() {
        //Font.loadAsync({'Karla': require('../assets/fonts/Karla-Regular.ttf')});
        Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf')});
    }
    state = { fontLoaded: false};
    
  async componentDidMount() {
    await Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf')});
    this.setState({fontLoaded: true});
  }

  render(){
    return(
        <View style = {styles.infographics}>
            <View>
                <Image source = {require('../assets/apartment.png')} style = {styles.icon}/> 
                {/*{this.state.fontLoaded ? (*/}
                    <Text style = {styles.header}>
                        Unlike single family homes, which are issued blue recycling carts by the Department of Streets and Sanitation,
                        <Text style={{fontWeight: 'bold', color: '#FF4545'}}> larger apartments are required to provide their 
                        own</Text> private recycling services for tenants.
                    </Text>
                {/*}) : null}*/}
                <Text style = {styles.text}>
                    But because the law isn’t strictly enforced, 
                    <Text style={{fontWeight: 'bold', color: '#FF4545'}}> some landlords fail to provide adequate recycling services</Text> and tenants are forced to 
                    be proactive to find out what recycling options are available to them or forgo recycling entirely.
                </Text>
                <View style = {styles.redirect}>
                    <Button
                        title= "Continue"
                        color= '#5990BF'
                        onPress={() => this.props.navigation.navigate('NavBar')}
                    />
                </View>
                <View style = {styles.backwards}>
                    <Button
                        title = "Go Back"
                        color= '#5990BF'
                        onPress={() => this.props.navigation.navigate('Contaminated')}
                    />
                </View>
            </View>
        </View>
    )
}}
  

const styles = StyleSheet.create({
    icon: {
        height: '40%',
        width: '60%',
        marginLeft: 80,
        marginTop: 40
    },
    infographics: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#384D5C' //'#1B384F'
      },
    header : {
        fontFamily: 'sans-serif',
        color: '#fff',
        fontSize: 16,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 25
    },
    text: {
        fontFamily: 'sans-serif',
        fontSize: 16,
        color: '#fff',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    redirect: {
        width: 90,
        height: 10,
        marginTop: 30,
        marginLeft: 250
    },
    backwards: {
        width: 90,
        height: 10,
        marginTop: -10,
        marginLeft: 25
    }
});
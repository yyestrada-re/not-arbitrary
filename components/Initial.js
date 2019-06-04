import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';

export default class Initial extends React.Component {
  static navigationOptions = {header: null} 

  componentDidMount() {
    Font.loadAsync({'pt': require('../assets/fonts/pt.ttf')});
  }

  state = { fontLoaded: false};
    
  async componentDidMount() {
    await Font.loadAsync({'pt': require('../assets/fonts/pt.ttf'),});
    this.setState({fontLoaded: true});
  }
     
  render() {
    return (
      <ImageBackground
        source = {require('../assets/blue-bin.jpg')}
        style = {styles.container}>
        <View style = {styles.parentView}>
          {this.state.fontLoaded ? (<Text style={styles.logoText}>!arbitrary</Text>) : null}
          <Image source = {require('../assets/sadparrot.gif')} style = {styles.logo}/>
          <Text style = {styles.textBox}>With its easily navigatible interface, the Chicago-based app, !arbitrary, aims to educate the masses about recyclable items, while emphasizing the importance of being sustainable.</Text>
          <View style = {styles.redirect}>
            <Button
              title="Start"
              color= '#5990BF'
              onPress={() => this.props.navigation.navigate('NavBar')}
            /> 
          </View>    
        </View>
      </ImageBackground>
    );}
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  parentView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(5,9,12, 0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoText: {
    color: '#fff',
    fontSize: 36,
    fontFamily: 'pt'
  },
  textBox: {
    width: 200,
    height: 175,
    fontFamily: 'sans-serif',
    fontSize: 14,
    color: '#fff',
    borderColor: '#fff',
    borderWidth: 2,
    justifyContent: 'center',
    marginTop: 50,
    padding: 20
  },
  logo: {
    width: 200,
    height: 200
  },
  redirect: {
    width: 80,
    height: 30,
    marginTop: 30
  }
});

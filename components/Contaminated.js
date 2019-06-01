import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';

export default class Contaminated extends React.Component {
  static navigationOptions = {header: null} 

  componentDidMount() {
    Font.loadAsync({'Karla': require('../assets/fonts/Karla-Regular.ttf')});
    Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf')});
  }

  state = { fontLoaded: false};
    
  async componentDidMount() {
    await Font.loadAsync({'Karla': require('../assets/fonts/Karla-Regular.ttf'),});
    await Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf'),});
    this.setState({fontLoaded: true});
  }

  render() {
    return(
        <View style = {styles.infographics}>
            <Image
                style = {{marginTop: 40, height: 150, marginLeft: 100, width: 150}}
                source = {require('../assets/contaminated.png')}
            />
            {this.state.fontLoaded ? (
            <Text style={styles.statsText}>
                One reason is the system that allows private haulers to label bins “contaminated” and send them to landfills, if improper materials are found. 
            </Text>
        ) : null}

        </View>
    );
  }
}

const styles = StyleSheet.create({
  infographics: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#384D5C' //'#1B384F'
  },
  statsText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Karla',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20
  },
  expand: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Karla',
    marginTop: 30,
    marginLeft: 10
  },
  redirect: {
    width: 90,
    height: 30,
    marginTop: 30,
    marginLeft: 250
  }
});



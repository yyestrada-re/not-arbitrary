import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';

export default class Statistics extends React.Component {
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
        {this.state.fontLoaded ? (
          <Text style={styles.statsText}>
            The percentage of Chicago’s total waste that is recycled through the city’s blue cart program is 9.71 percent, 
            <Text style={{fontWeight: 'bold', color: '#FF4545'}}>the worst rate in the nation</Text>
          </Text>
        ) : null}
        <View>
          {this.state.fontLoaded ? (
            <Text style = {styles.expand}>
              Chicago ranks as the worst major city in the United States for recycling in residential areas. By comparison, cities like San Francisco and Seattle has recycling rates near 60 percent. But why? 
            </Text>
          ) : null}
        </View>
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
    fontSize: 20,
    fontFamily: 'Space-Mono',
    marginTop: 50,
    marginRight: 100,
    marginLeft: 10
  },
  expand: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Karla',
    marginTop: 80,
    marginLeft: 20
  },
  redirect: {
    width: 80,
    height: 30,
    marginTop: 30
  }
});



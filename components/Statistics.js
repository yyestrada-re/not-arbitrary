import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';

//okay but can I just let it be known that I've never made an app before. And I've also never used JS before :(
export default class Statistics extends React.Component {
  static navigationOptions = {header: null} 

  componentDidMount() {
    //Font.loadAsync({'Karla': require('../assets/fonts/Karla-Regular.ttf')});
    Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf')});
  }

  state = { fontLoaded: false};
    
  async componentDidMount() {
    //await Font.loadAsync({'Karla': require('../assets/fonts/Karla-Regular.ttf'),});
    await Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf'),});
    this.setState({fontLoaded: true});
  }

  render() {
    return(
      <View style = {styles.infographics}>
        <Image
          style = {{marginTop: 40, height: 200, marginLeft: 80, width: 200}}
          source = {require('../assets/trash.png')}
        />
        {this.state.fontLoaded ? (
          <Text style={styles.statsText}>
            The percentage of Chicago’s total waste that is recycled through the city’s blue cart program is 9.71 percent, 
            <Text style={{fontWeight: 'bold', color: '#FF4545'}}>the worst rate in the nation</Text>
          </Text>
        ) : null}
        <View>
          <Text style = {styles.expand}>
            Chicago ranks as the worst major city in the United States for recycling in residential areas. By comparison, cities like San Francisco and Seattle has recycling rates near 60 percent. But why? 
          </Text>
        </View>
        <View style = {styles.redirect}>
          <Button
            title="Continue"
            color= '#5990BF'
            onPress={() => this.props.navigation.navigate('Contaminate')}
          />
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
    fontSize: 18,
    fontFamily: 'Space-Mono',
    //marginTop: 50,
    marginRight: 100,
    marginLeft: 10
  },
  expand: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'sans-serif',
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



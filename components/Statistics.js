import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';

//okay but can I just let it be known that I've never made an app before. And I've also never used JS before :(
export default class Statistics extends React.Component {
  static navigationOptions = {header: null} 

  componentDidMount() {
    Font.loadAsync({'pt': require('../assets/fonts/pt.ttf')});
    Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf')});
  }

  state = { fontLoaded: false};
    
  async componentDidMount() {
    await Font.loadAsync({'pt': require('../assets/fonts/pt.ttf'),});
    await Font.loadAsync({'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf'),});
    this.setState({fontLoaded: true});
  }

  render() {
    return(
      <View style = {styles.infographics}>
        <View style={{width: 260, height:200, flex:1, flexDirection:'row', marginTop: 5}}>
          <Image source = {require('../assets/recycle.png')} style = {{marginTop: 30, height: 200, width: 160}}/>
          {this.state.fontLoaded ? (
          <Text style={styles.statsText}>
            The percentage of Chicago’s total waste that is recycled through the city’s blue bin program is 9.71%, 
            <Text style={{fontWeight: 'bold', color: '#FF4545'}}>the worst rate in the nation</Text>
          </Text>
          ) : null}
        </View>
      <View style = {styles.infographics}>
        <Text style = {styles.expand}>
         Chicago ranks as the worst major city in the United States for recycling in residential areas. {"\n\n"}By comparison, metropolitan cities like San Francisco and Seattle have recycling rates near 60 percent.{"\n\n"}
         {this.state.fontLoaded ? (
          <Text style = {{fontWeight: 'bold', marginTop: 20, color: '#FF4545', fontFamily: 'Space-Mono', fontSize: 20}}>So why is Chicago an exception?</Text>
         ): null}
        </Text>
        <View style = {styles.redirect}>
          <Button
            title="Continue"
            color= '#5990BF'
            onPress={() => this.props.navigation.navigate('Contaminate')}
          />
        </View>
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
    //flexDirection: 'column',
    backgroundColor: '#384D5C', //'#1B384F'
  },
  statsText: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Space-Mono',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 60
  },
  expand: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'sans-serif',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10
  },
  redirect: {
    width: 90,
    height: 30,
    marginTop: 20,
    marginLeft: 250
  },
  backwards: {
    width: 90,
    height: 30,
    marginTop: -30,
    marginLeft: 25
  }
});



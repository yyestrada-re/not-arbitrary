import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';

export default class Contaminated extends React.Component {
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
                style = {{marginTop: 30, height: 150, marginLeft: 100, width: 150}}
                source = {require('../assets/contaminated.png')}
            />
            {this.state.fontLoaded ? (
                <Text style = {styles.main}>
                     “Since 2014, private and municipal waste hauling crews labeled
                     <Text style={{fontWeight: 'bold', color: '#FF4545'}}> at least 577,886 recycling bins as ‘grossly contaminated’</Text> with improper items” 
                </Text>
            ): null}
            <Text style={styles.statsText}>
              Why? One reason is the system that allows private haulers to label bins “contaminated” and send them to landfills, if improper materials are found. {"\n\n"}Under city rules, one plastic bag or food item improperly placed in a recycling bin could mean the whole bin is labeled “grossly contaminated.” 
              (Ruppenthal)
            </Text>
            <Text style = {{marginTop: 20, marginLeft: 20, fontSize: 15, fontFamily: 'sans-serif', color: '#fff'}}>
              <Text style = {{fontWeight: 'bold'}}>Source: </Text>
              Better Government Association
            </Text>
            <View style = {styles.redirect}>
                <Button
                    title = "Continue"
                    color= '#5990BF'
                    onPress={() => this.props.navigation.navigate('Apartments')}
                />
            </View>
            <View style = {styles.backwards}>
              <Button
                title="Go Back"
                color= '#5990BF'
                onPress={() => this.props.navigation.navigate('Stats')}
              />
            </View>
            <View style = {{height: 30, width: 400}}/>
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
    fontFamily: 'sans-serif',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25
  },
  main: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Space-Mono',
    marginRight: 70,
    marginLeft: 15,
    marginTop: 5
  },
  redirect: {
    width: 90,
    height: 30,
    marginTop: 30,
    marginLeft: 250
  },
  backwards: {
    width: 90,
    height: 30,
    marginTop: -30,
    marginLeft: 25
  }
});


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
                <Text style = {styles.main}>
                     “Since 2014, private and municipal waste hauling crews labeled at least 577,886 recycling bins as ‘grossly contaminated’ with improper items” 
                </Text>
            ): null}
            {this.state.fontLoaded ? (
                <Text style={styles.statsText}>
                    One reason is the system that allows private haulers to label bins “contaminated” and send them to landfills, if improper materials are found. {"\n\n"}Under city rules, one plastic bag or food item improperly placed in a recycling bin could mean the whole bin is labeled “grossly contaminated.” 
                </Text>
            ) : null}
            <Button>
                title = "Continue"
                onPress={() => this.props.navigation.navigate('Apartments')}
            </Button>

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
    marginTop: 35
  },
  main: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Space-Mono',
    marginRight: 70,
    marginLeft: 15
  },
  redirect: {
    width: 90,
    height: 30,
    marginTop: 30,
    marginLeft: 250
  }
});



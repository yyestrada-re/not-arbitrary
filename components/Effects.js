import React from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, Button } from 'react-native';
import { Font } from 'expo';
import { ScrollView } from 'react-native-gesture-handler';

export default class Effects extends React.Component {
  componentDidMount() {
    Font.loadAsync({'pt': require('../assets/fonts/pt.ttf')});
  }

  state = { fontLoaded: false};
    
  async componentDidMount() {
    await Font.loadAsync({'pt': require('../assets/fonts/pt.ttf'),});
    this.setState({fontLoaded: true});
  };

  render() {
    return(
      <ScrollView>
        <View style = {styles.infographics}>
          <Image
            style = {{marginTop: 40, height: 200, marginLeft: 80, width: 200}}
            source = {require('../assets/warning.png')}
          />
          <Text style={styles.header}>The Global Implications of</Text>
          <Text style = {styles.partTwo}>!Recycling</Text>
          <View style={ styles.column }>
            <View style={ styles.row }>

              <Image source = {require('../assets/sadparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>Deforestation</Text>
                {"\t"} More trash leads to 
              </Text>
              <Text style = {styles.cont}>an increased need for space to allocate for a growing landfill. To name a few effects, deforestation can be attributed to an array of different environmental consequences including desertfication, soil erosion, greenhouse gas emisions, increased flooding, and loss of biodiversity. {"\t\t"}</Text>

              <Image source = {require('../assets/sadparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>Increased Greenhouse Gas Emissions</Text>
                {"\t"} 
              </Text>
              <Text style = {styles.cont}>The incineration of landfill, or overall decomposition of trash, releases greenhouse gases such as Methane, which is 3x more potent than Carbon Dioxide. {"\t\t"}</Text>

              <Image source = {require('../assets/sadparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>E-Waste and Food Chains</Text>
                {"\t"}Heavy
              </Text>
              <Text style = {styles.cont}>metals found in electronics, such as lead, copper, and chromium, can be hazardous when disposed of improperly. Heavy metals are fat soluble and can bioaccumulate and biomagnify.</Text>

              <Image source = {require('../assets/sadparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>Leachate</Text>
                {"\t"}Leachate is a toxic liquid
              </Text>
              <Text style = {styles.cont}>that forms when waste breaks down in a landfill and water filters through. Leachate is highly toxic and can pollute aquifers, waterways, and the surrounding soil.</Text>

              <Image source = {require('../assets/sadparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>Aquatic Life</Text>
                {"\t"}Plastic that is improperly
              </Text>
              <Text style = {styles.cont}>disposed of can wind up in the ocean and other major water bodies where they can remain there for hundreds of years. Aquatic life may also get caught in loose plastic or die by inhaling toxic materials.</Text>

              <Image source = {require('../assets/sadparrot.gif')} style = {styles.tiny}/>
              <Text style = {styles.list}>
                <Text style = {styles.specialBolded}>Energy Consumption</Text>
                {"\t"} Huge amounts 
              </Text>
              <Text style = {styles.cont}>of energy are used when making products from raw materials. Recycling requires slighly less energy and therefore helps preserve natural resources. </Text>

            </View>
            <View style = {{height: 50, width: 300}}/>
          </View>
        </View>
      </ScrollView>
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
  header: {
    color: '#FF4545',
    fontSize: 20,
    fontFamily: 'sans-serif',
    //marginTop: 50,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 50
  },
  partTwo: {
    color: '#FF4545',
    fontSize: 20,
    fontFamily: 'sans-serif',
    //marginTop: 50,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 125
  },
  redirect: {
    width: 130,
    height: 30,
    marginTop: 30,
    marginLeft: 215
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 320
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1
  },
  tiny: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginTop: 10
  },
  list: {
    fontFamily: 'sans-serif',
    color: '#fff',
    fontSize: 15,
    marginTop: 21,
    marginLeft: 8
  },
  cont: {
    fontFamily: 'sans-serif',
    color: '#fff',
    fontSize: 15,
    marginTop: -1,
    marginLeft: 55
  },
  specialBolded: {
    fontWeight: 'bold', 
    fontFamily: 'sans-serif',
    color: '#FF4545',
    fontSize: 15,
    marginTop: 21,
    marginLeft: 18
  }
});



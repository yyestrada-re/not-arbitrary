import React, {Component} from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet, Linking } from 'react-native';
import call from 'react-native-phone-call';

export default class Locations extends React.Component {
  makeCall = (number) => {
    const args = {
      number: number,
      prompt: true
    }
    call(args).catch(console.error)
  };
 
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationOne.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> City of Chicago Drop-off Center {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/City+of+Chicago+Drop-off+Center/@41.7935846,-87.6937175,15z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x880e2e3cf34af013:0x5bbe7c320dd6ea23!8m2!3d41.7935846!4d-87.6849628');}}>       
              2411 W 55th St, Chicago, IL 60629 {"\t\t\t\n\n"}
            </Text>

            <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('3127445000')}>
              (312) 744-5000
            </Text>
          </Text>  
        </View> 
      </TouchableOpacity>

    <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationTwo.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> Waste Management - Chicago Recycling Services {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Waste+Management+-+Chicago+Recycling+Services/@41.8051808,-87.715085,15z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x880e31e54e5a6bcb:0x138a06611015c074!8m2!3d41.8051808!4d-87.7063303');}}>       
              3301 W 48th Pl, Chicago, IL 60632 {"\t\t\t\n\n"}
            </Text> 
            <Text style = {styles.bolded}>Phone Number: </Text>  
              <Text 
                onPress = {() => this.makeCall('7732472070')}>
                (773) 247-2070
              </Text>
            </Text>
        </View> 
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationThree.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> J & B Scrap Metals Inc {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/J+%26+B+Scrap+Metals+Inc/@41.8189439,-87.736233,12z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x0:0xd2334beab4139d26!8m2!3d41.7789608!4d-87.6796532');}}>       
              6301 S Bell Ave, Chicago, IL 60636 {"\t\t\t\n\n"}
            </Text>
          <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('7737765616')}>
              (773) 776-5616
            </Text>
          </Text> 
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationFour.jpeg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> Windy City Metal Recycling & Resources, LLC {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Windy+City+Metal+Recycling+%26+Resources,+LLC/@41.7975493,-87.826874,10.72z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x0:0xb1fef3861c208656!8m2!3d41.902277!4d-87.7434254');}}>       
              4617 W Division St, Chicago, IL 60651 {"\t\t\t\n"}
            </Text>
            <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('7732871500')}>
              (773) 287-1500
            </Text>
          </Text> 
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationFive.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> Shred-All Recycling {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Shred-All+Recycling/@41.8189013,-87.7362331,12z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x0:0x9f0ce03e4de73130!8m2!3d41.8159934!4d-87.6562858');}}>       
              1234 W 43rd St, Chicago, IL 60609 {"\t\t\t\n\n"}
            </Text>
            <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('7735235404')}>
              (773) 523-5404
            </Text>
          </Text>
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationSix.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> Metal Recycle Here LLC. {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Metal+Recycle+Here+LLC./@41.8189013,-87.7362331,12z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x0:0x79cbe0a3e46330ac!8m2!3d41.8259878!4d-87.6942229');}}>       
              3711 S California Ave, Chicago, IL 60632 {"\t\t\t\n\n"}
            </Text>
            <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('7735233711')}>
              (773) 523-3711
            </Text>
          </Text>
        </View> 
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationSeven.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> Newtech E Scrap Recycling {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Newtech+E+Scrap+Recycling/@41.8189013,-87.7362331,12z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x0:0xa05eca1c0cb50ba1!8m2!3d41.8268192!4d-87.7041793');}}>       
              3159 W 36th Pl, Chicago, IL 60632 {"\t\t\t\n\n"}
            </Text>
            <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('7732558758')}>
              (773) 255-8758
            </Text>
          </Text> 
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationEight.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> Household Chemicals and Computer Recycling Facility {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Household+Chemicals+and+Computer+Recycling+Facility/@41.8189013,-87.7362331,12z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x0:0x2dd457c6ff182f81!8m2!3d41.9025965!4d-87.655127');}}>       
              1150 N North Branch St, Chicago, IL 60642 {"\t\t\t\n\n"}
            </Text>
            <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('3127443060')}>
              (312) 744-3060
            </Text>
          </Text> 
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationNine.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> Greenway Recycling Services LLC {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Greenway+Recycling+Services+LLC/@41.8297017,-87.7584124,12.27z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x0:0xf8bf00c21959f67a!8m2!3d41.8530526!4d-87.7377605');}}>       
              2100 S Kilbourn Ave, Chicago, IL 60623 {"\t\t\t\n"}
            </Text>
            <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('7735220025')}>
              (773) 522-0025
            </Text>
          </Text> 
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationTen.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> Family Recycling {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Family+Recycling/@41.8229618,-87.7142924,12.75z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x0:0x9bff6d160019e3ef!8m2!3d41.856329!4d-87.6400638');}}>       
              1851 S Clinton St, Chicago, IL 60616 {"\t\t\t\n\n"}
            </Text>
            <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('3122260473')}>
              (312) 226-0473
            </Text>
          </Text> 
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationEleven.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> Aargus Recycling {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Aargus+Recycling/@41.8161379,-87.743118,11.89z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x0:0x3176f50bcb622474!8m2!3d41.8051658!4d-87.6780653');}}>       
              4848 S Hoyne Ave, Chicago, IL 60609 {"\t\t\t\n"}
            </Text>
            <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('7733762637')}>
              (773) 376-2637
            </Text>
          </Text> 
        </View> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.container}>
        <View style = {styles.card}>
          <Image style = {styles.cardImage} source = {require('../assets/locationTwelve.jpg')}/>
          <Text style={styles.cardText}>
            <Text style = {styles.bolded}>Location Name:</Text> Edco Recycling Co {"\n\n"}
            <Text style = {styles.bolded}>Address: </Text>
            <Text onPress={() => {
              Linking.openURL('https://www.google.com/maps/place/Edco+Recycling+Co/@41.7975493,-87.826874,10.72z/data=!4m8!1m2!2m1!1srecycling+centers!3m4!1s0x0:0xb886c7f9151ff63!8m2!3d41.7445485!4d-87.636137');}}>       
              8224 S Vincennes Ave, Chicago, IL 60620 {"\t\t\t\n\n"}
            </Text>
            <Text style = {styles.bolded}>Phone Number: </Text>  
            <Text 
              onPress = {() => this.makeCall('7738731600')}>
              (773) 873-1600
            </Text>
          </Text> 
        </View> 
      </TouchableOpacity>

    </View> 
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#384D5C',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 1,
    marginLeft: '2%',
    width: '96%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      width: 3,
      height: 3
    }
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  cardText: {
    padding: 10,
    fontSize: 14,
    //marginTop: 5
  },
  bolded: {
    fontWeight: 'bold'
}
});

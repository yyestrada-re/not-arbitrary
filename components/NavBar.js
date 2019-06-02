import React from "react";
import {Image, View, Icon, tab} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {Ionicons} from '../node_modules/@expo/vector-icons';

import Home from './Home';
import Effects from './Effects';
import Items from './Items';

const TabNavigator = createBottomTabNavigator ({
 Home: {
    screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/home.png")}
            style={{ width: 26, height: 26, tintColor: tintColor }}
          />
      )
    }
 },
 Effects: {
    screen: Effects,
    navigationOptions: {
        tabBarLabel: "Effects",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/questions.png")}
            style={{ width: 26, height: 26, tintColor: tintColor }}
          />
      )
    }
 },
Items: {
    screen: Items,
    navigationOptions: {
        tabBarLabel: "Items",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("../assets/recycle.png")}
            style={{ width: 26, height: 26, tintColor: tintColor }}
          />
      )
    }
 }
});


export default createAppContainer(TabNavigator)

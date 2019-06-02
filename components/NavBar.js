import React from "react";
import {Image, View, Icon} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Ionicons from '../node_modules/@expo/vector-icons';

import Home from './Home';
import Effects from './Effects';
import Items from './Items';

const TabNavigator = createBottomTabNavigator ({
 Default: {
    screen: Home,
    /*navigationOptions: {
        tabBarLabel: "Home Page",
        tabBarIcon: ({tintColor}) => (
            <Icon source = {require('../assets/home.png')} size = {30}/>
        ),
        tabBarOptions: {showIcon: true},
    }*/
 },
 Effects: {screen: Effects},
 Items: {screen: Items},
});


export default createAppContainer(TabNavigator)

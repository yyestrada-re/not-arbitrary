import React from "react";
import {Image, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Home from './Home';
import Effects from './Effects';
import Items from './Items';

const TabNavigator = createBottomTabNavigator ({
 Default: Home,
 Effects: Effects,
 Items: Items,
});

export default createAppContainer(TabNavigator)

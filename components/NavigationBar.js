import React from "react";
import {Image, View} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

<Image home = {require('../assets/home.png')}> 
<Image ques = {require('../assets/questions.png')}> 
<Image recy = {require('../assets/recycle.png')}> 

class HomeScreen extends React.Component {
  render() {
    return (
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Home! </Text>
      </View>
    );
  }
}

class QuestionsScreen extends React.Component {
  render() {
    return (
      <View> style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Questions! </Text>
      </View>
    );
  }
}

class RecycleScreen extends React.Component {
  render() {
    return (
      <View> style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Recycle! </Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator ({
  home: HomeScreen,
  ques: QuestionsScreen,
  recy: RecycleScreen,
})

export default createAppContainer(TabNavigator)
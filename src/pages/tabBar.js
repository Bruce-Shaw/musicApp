import React, { Component } from "react";
import { createBottomTabNavigator } from 'react-navigation';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Find from "./find.js";
import Video from "./video.js";

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

export default createBottomTabNavigator({
  Find: {
      screen: Find,
      navigationOptions: {
        tabBarLabel: "发现",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../images/icon/home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      }
  },
  Video: {
    screen: Video,
    navigationOptions: {
      tabBarLabel: "视频",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icon/show.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
}, {
  initialRouteName: 'Find',
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#f03d37',
    inactiveTintColor: 'black',
    showIcon: true,
    style: {
      backgroundColor: 'white',
    },
  },
});


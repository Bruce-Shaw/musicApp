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
import Mine from "./mine.js";
import Friend from "./friend.js";
import Account from "./account.js";

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
            source={require('../images/icon/find.png')}
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
          source={require('../images/icon/video.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icon/mine.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  Friend: {
    screen: Friend,
    navigationOptions: {
      tabBarLabel: "朋友",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icon/friend.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
      ),
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: "朋友",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icon/account.png')}
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
//    inactiveTintColor: 'black',
    showIcon: true,
    style: {
      backgroundColor: 'white',
    },
  },
});


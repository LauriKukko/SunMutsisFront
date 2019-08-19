import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen";
import {Button} from "react-native-web";



const navigator = createStackNavigator(
    {

    Home: HomeScreen
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {

        title: 'Sun Mutsis'

      }
    }

);
export default createAppContainer(navigator);


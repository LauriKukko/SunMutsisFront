import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from "./src/screens/HomeScreen";
import MainComponent from "./src/components/MainComponent";


const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        MainC: MainComponent
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'Sun Mutsis'
        }
    }
);
export default createAppContainer(navigator);

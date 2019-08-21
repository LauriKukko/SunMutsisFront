import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import {Button} from 'react-native';
// import FontAwesome, {SolidIcons} from "react-native-fontawesome";
// import MainComponent from "./src/components/MainComponent";

const navigator = createStackNavigator(
    {
    Home: HomeScreen
    },
    {

      initialRouteName: 'Home',
        defaultNavigationOptions:{
          title: 'Sun Mutsis',
            headerLeft: <Button onPress={() => props.navigation.navigate('tähän halutun screenin nimi')} title= "MENU" />,
            headerRight:<Button onPress={() =>alert('You tapped the button!')}title="Alert"/>
        }
    }
);

export default createAppContainer(navigator);



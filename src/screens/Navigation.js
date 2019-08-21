//Täällä kattonavigointi kaikkien screenien välillä. (sanna)
import React from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import MenuScreen from "./MenuScreen";
import AddTaskScreen from "./AddTaskScreen";


const Navigation = createStackNavigator(
    {
        Login: LoginScreen,
        Home: HomeScreen ,//tähän perään saa valumaan propseja. Selvitä.
        Menu: MenuScreen,
        AddTask: AddTaskScreen,
    },
    {
        initialRouteName: 'Login',
        /*  defaultNavigationOptions:{
            title: 'Sun Mutsis',
              headerLeft: <Button onPress={() => props.navigation.navigate('tähän halutun screenin nimi')} title= "HOME?BACK?" />,
              headerRight:<Button onPress={() => props.navigation.navigate('Menu')}title="MENU"/>
            //  headerRight:<Button onPress={() =>alert('You tapped the button!')}title="MENU"/>
          } */
    }
);
export default createAppContainer(Navigation);
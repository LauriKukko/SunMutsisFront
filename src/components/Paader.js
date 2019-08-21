import React, {Component} from 'react';
import {Button, Text, View} from "react-native";

export default class Paader extends React.Component {
    static navigationOptions = {
        title: 'Sun Mutsis',
        headerRight:<Button onPress={() => props.navigation.navigate('Menu')}title="MENU"/>
    };

    render() {
        return (
            <View>
                <Text>HEADER</Text>
            </View>
        )};

}
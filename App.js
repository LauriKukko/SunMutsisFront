import React, { Component } from 'react';
import {View} from 'react-native';
import Navigation from './src/screens/Navigation';
import Header from "./src/components/Header";
class App extends React.Component{
    render() {
        return (
            <View style={{flex:1}}>
                <Header/>
                <Navigation/>
            </View>
        );
    }
}
export default App;


import React, { Component } from 'react';
import {View} from 'react-native';
import Navigation from './src/screens/Navigation';

class App extends React.Component{
    render() {
        return (
            <View style={{flex:1}}>
                <Navigation/>
            </View>
        );
    }
}

export default App;

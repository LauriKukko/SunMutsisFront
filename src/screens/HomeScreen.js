import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Anna tän toimia</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text:{
            fontSize:30,
        }
    });


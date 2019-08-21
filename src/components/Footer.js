import React, {Component}  from 'react';
import {Text, StyleSheet, View, TouchableHighlight, Button} from 'react-native';

export default class Footer extends Component{
    render() {
        return (
            <View>
               <TouchableHighlight style={styles.addButton} underlayColor='#ff7043' onPress={()=>{console.log('pressed')}}>
                    <Text style={{fontSize: 50, color: 'white'}}>+</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        addButton: {
        backgroundColor: '#56e4ff',
        borderColor: '#53d8ff',
        borderWidth: 1,
        height: 50,
        width: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -140,
        // left: 0,
        right: 10,
        zIndex: 11,
        // top: 480,
        // left: 290,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },
});

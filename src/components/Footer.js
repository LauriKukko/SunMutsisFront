import React from 'react';
import {Text, StyleSheet, Button, View, TouchableHighlight} from 'react-native';


const Footer = ()  => (
   <View>
       <TouchableHighlight style={styles.addButton}
                              underlayColor='#ff7043' onPress={()=>{console.log('pressed')}}>
       <Text style={{fontSize: 50, color: 'white'}}>+</Text>
   </TouchableHighlight>
   </View>
);

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: '#56e4ff',
        borderColor: '#53d8ff',
        borderWidth: 1,
        height: 100,
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
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

export default Footer;

import React from 'react';
import {View, Text} from 'react-native';
import Hamburger from 'react-native-hamburger';


const Header = () => {
    const { textStyle, viewStyle, hamburgerStyle } = styles;

    return (
        <View style={viewStyle}>
            <Hamburger style={hamburgerStyle}/>
            <Text style={textStyle}>Tässä Heederi</Text>
        </View>
    )
};

const styles = {
    viewStyle: {
        backgroundColor: '#1F9',
        height: 100,
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontFamily: 'monospace',
        fontSize: 40,
        fontWeight: '700',
        color: '#FFF'
    }

}
export default Header;
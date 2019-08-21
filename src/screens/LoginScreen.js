//Tänne sisäänkirjausnäkymä

import React, {Component} from 'react';
import { Text, View,Button } from 'react-native';

export default class LoginScreen extends Component {
    render() {
        const {navigate}=this.props.navigation;
        return (
            <View>
                <Text>LOGIN</Text>
                <Button onPress={()=>navigate('Home')}title={'HomeScreenille'}/>
            </View>
        )};

}
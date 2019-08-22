//Tänne sisäänkirjausnäkymä

import React, {Component} from 'react';
import { Text, View,Button } from 'react-native';

export default class LoginScreen extends Component {
    render() {
        const {replace}=this.props.navigation;
        return (
            <View>
                <Text>LOGIN</Text>
                <Button onPress={()=>replace('Home')}title={'HomeScreenille'}/>
            </View>
        )};

}
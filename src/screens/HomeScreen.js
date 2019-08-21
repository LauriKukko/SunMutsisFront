import React, {Component} from 'react';
import { StyleSheet, View, Button} from 'react-native';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Main from "../components/Main";


export default class HomeScreen extends React.Component {
    static navigationOptions =({ navigate }) => {
        return {
            title: 'Home Screen',
            headerRight: <Button onPress={() => props.navigation.navigate('Menu')} title="MENU"/>
        };
    };
    render() {

        const {navigate}=this.props.navigation;
    return (
        <View>
            <NavBar/>
            <Button onPress={()=>navigate('Menu')}title={'Menuscreenille'}/>
            {/*<Text style={styles.saatanallinenTeksti}>Saatana</Text>*/}
            <Main/>
            {/*<Text style={styles.saatanallinenTeksti}>Ystävä</Text>*/}
            <Footer/>
        </View>
    );
}};

const styles = StyleSheet.create({
    text:{
        fontSize: 30
    },
    saatanallinenTeksti:{
        fontSize: 50,
        color: 'red'
    }
});



import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';
import NavBar from "../components/NavBar";
import MainComponent from "../components/MainComponent";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <NavBar/>
                <Main/>
                {/*<MainComponent/>*/}
                {/*<Footer/>*/}
            </View>
        );
    };
}

const styles = StyleSheet.create({
    text:{
        fontSize: 30
    },
    saatanallinenTeksti:{
        fontSize: 50,
        color: 'red'
    }
});

